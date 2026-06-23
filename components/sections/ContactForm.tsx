'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, Loader2, FileUp, X, File as FileIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ── Noms lisibles par clé de document ─────────────────────────── */
const DOC_LABELS: Record<string, string> = {
  cv:               'CV à jour',
  lettre:           'Lettre de motivation',
  diplome:          'Diplôme / Attestation',
  piece_identite:   'Pièce d\'identité',
  convention_stage: 'Convention de stage',
  releve_notes:     'Relevé de notes',
}

/* ── Zod schema ─────────────────────────────────────────────────── */
const schema = z.object({
  nom:        z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  entreprise: z.string().optional(),
  email:      z.string().email('Adresse email invalide'),
  telephone:  z
    .string()
    .regex(/^[+\d\s\-().]{7,20}$/, 'Numéro invalide')
    .optional()
    .or(z.literal('')),
  sujet:   z.string().min(1, 'Veuillez choisir un sujet'),
  poste:   z.string().optional(),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
  rgpd:    z.boolean().refine((v) => v === true, 'Vous devez accepter la politique de confidentialité'),
})

type FormData = z.infer<typeof schema>

interface Props {
  subjects: string[]
}

export function ContactForm({ subjects }: Props) {
  const searchParams   = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  /* Fichiers indexés par clé de document (ex: "cv", "lettre") */
  const [files, setFiles] = useState<Record<string, File>>({})
  /* Clés de documents demandés (depuis l'URL) */
  const [requiredDocs, setRequiredDocs] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const sujetWatch = watch('sujet')
  const isRecruitment =
    sujetWatch?.toLowerCase().includes('recrutement') ||
    sujetWatch?.toLowerCase().includes('candidature')

  /* ── Pré-remplissage depuis l'URL ────────────────────────────── */
  useEffect(() => {
    const sujet = searchParams.get('sujet')
    const poste = searchParams.get('poste')
    const docs  = searchParams.get('docs')

    if (sujet) setValue('sujet', sujet)
    if (poste) setValue('poste', poste)
    if (docs)  setRequiredDocs(docs.split(',').filter(Boolean))
  }, [searchParams, setValue])

  /* ── Gestion fichiers ────────────────────────────────────────── */
  function handleFile(key: string, file: File | undefined) {
    if (!file) return
    if (file.type !== 'application/pdf') {
      alert(`Le fichier "${file.name}" doit être au format PDF.`)
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      alert(`Le fichier "${file.name}" dépasse la limite de 5 Mo.`)
      return
    }
    setFiles((prev) => ({ ...prev, [key]: file }))
  }

  function removeFile(key: string) {
    setFiles((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  /* ── Soumission ──────────────────────────────────────────────── */
  async function onSubmit(data: FormData) {
    try {
      setLoading(true)
      const formData = new FormData()

      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== null) formData.append(k, String(v))
      })

      /* Chaque fichier sous la clé file_{key} */
      Object.entries(files).forEach(([key, file]) => {
        formData.append(`file_${key}`, file)
      })

      const res = await fetch('/api/contact', { method: 'POST', body: formData })
      if (!res.ok) throw new Error()

      setSubmitted(true)
      reset()
      setFiles({})
      setRequiredDocs([])
    } catch {
      alert("L'envoi a échoué. Veuillez réessayer ou nous contacter directement.")
    } finally {
      setLoading(false)
    }
  }

  /* ── Succès ──────────────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-secondary mb-2">Message envoyé !</h3>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            Merci pour votre message. Notre équipe vous répondra sous 24 heures ouvrées.
          </p>
        </div>
        <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm mt-2">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  /* ── Formulaire ──────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

      {/* Nom + Entreprise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom complet" required error={errors.nom?.message}>
          <input {...register('nom')} placeholder="Jean Moukoko" className={inputCls(!!errors.nom)} />
        </Field>
        <Field label="Entreprise" error={errors.entreprise?.message}>
          <input {...register('entreprise')} placeholder="Groupe Horizon (optionnel)" className={inputCls(false)} />
        </Field>
      </div>

      {/* Email + Téléphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email professionnel" required error={errors.email?.message}>
          <input {...register('email')} type="email" placeholder="jean@entreprise.com" className={inputCls(!!errors.email)} />
        </Field>
        <Field label="Téléphone" error={errors.telephone?.message}>
          <input {...register('telephone')} type="tel" placeholder="+242 06 761 21 21" className={inputCls(!!errors.telephone)} />
        </Field>
      </div>

      {/* Sujet */}
      <Field label="Sujet" required error={errors.sujet?.message}>
        <select {...register('sujet')} className={cn(inputCls(!!errors.sujet), 'bg-white')}>
          <option value="">Sélectionnez un sujet…</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>

      {/* Poste (recrutement) */}
      {isRecruitment && (
        <Field label="Poste souhaité" required error={errors.poste?.message}>
          <input {...register('poste')} placeholder="Ex : Technicien Systèmes & Réseaux" className={inputCls(!!errors.poste)} />
        </Field>
      )}

      {/* Message */}
      <Field label="Message" required error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          placeholder={isRecruitment
            ? 'Présentez-vous brièvement et expliquez votre motivation…'
            : 'Décrivez votre projet, vos besoins ou votre question…'}
          className={cn(inputCls(!!errors.message), 'resize-none')}
        />
      </Field>

      {/* ── Upload documents (recrutement) ───────────────────── */}
      {isRecruitment && requiredDocs.length > 0 && (
        <div className="rounded-2xl border border-primary/20 bg-primary/4 p-5 space-y-3">
          <p className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
            <FileUp className="w-3.5 h-3.5" />
            Documents requis — PDF uniquement, 5 Mo max par fichier
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {requiredDocs.map((key) => {
              const label    = DOC_LABELS[key] ?? key
              const uploaded = files[key]

              return (
                <div key={key}>
                  {!uploaded ? (
                    /* ── Zone upload ── */
                    <label
                      className="group flex flex-col items-center justify-center gap-2
                        border-2 border-dashed border-primary/30 rounded-xl p-4 cursor-pointer
                        bg-white hover:border-primary hover:bg-primary/4 transition-all duration-200 min-h-[90px]"
                    >
                      <input
                        type="file"
                        accept="application/pdf"
                        className="sr-only"
                        onChange={(e) => handleFile(key, e.target.files?.[0])}
                      />
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                        <FileUp className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">
                          {label}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-0.5">Cliquez pour choisir un PDF</p>
                      </div>
                    </label>
                  ) : (
                    /* ── Fichier sélectionné ── */
                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 min-h-[90px]">
                      <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                        <FileIcon className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-green-800 truncate">{label}</p>
                        <p className="text-[10px] text-green-600 truncate mt-0.5">{uploaded.name}</p>
                        <p className="text-[10px] text-green-500">
                          {(uploaded.size / 1024).toFixed(0)} Ko
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(key)}
                        className="w-6 h-6 bg-green-200 hover:bg-red-100 rounded-full flex items-center justify-center shrink-0 transition-colors group"
                        aria-label={`Supprimer ${label}`}
                      >
                        <X className="w-3 h-3 text-green-700 group-hover:text-red-600 transition-colors" />
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input {...register('rgpd')} type="checkbox" className="mt-1 w-4 h-4 accent-primary" />
          <span className="text-gray-500 text-xs leading-relaxed">
            J&apos;accepte que mes données soient utilisées conformément à la{' '}
            <a href="/politique-confidentialite" className="text-primary hover:underline">
              politique de confidentialité
            </a>{' '}
            de NOISIM. <span className="text-primary">*</span>
          </span>
        </label>
        {errors.rgpd && <p className="text-rose-500 text-xs mt-1 ml-7">{errors.rgpd.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={cn('btn-primary w-full justify-center text-base', loading && 'opacity-70 cursor-not-allowed')}
      >
        {loading ? (
          <><Loader2 className="w-5 h-5 animate-spin" />Envoi en cours…</>
        ) : (
          <><Send className="w-5 h-5" />Envoyer le message</>
        )}
      </button>
    </form>
  )
}

/* ── Helpers ─────────────────────────────────────────────────────── */

function inputCls(hasError: boolean) {
  return cn(
    'w-full px-4 py-3 text-sm text-secondary bg-surface border rounded-xl outline-none transition-all duration-200',
    'placeholder:text-gray-400',
    'focus:border-primary focus:ring-2 focus:ring-primary/10',
    hasError
      ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-100'
      : 'border-gray-200 hover:border-gray-300'
  )
}

function Field({
  label, required, error, children,
}: {
  label: string; required?: boolean; error?: string; children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-secondary mb-1.5">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-rose-500 text-xs mt-1.5">{error}</p>}
    </div>
  )
}