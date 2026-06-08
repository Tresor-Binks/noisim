'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  entreprise: z.string().optional(),
  email: z.string().email('Adresse email invalide'),
  telephone: z
    .string()
    .regex(/^[+\d\s\-().]{7,20}$/, 'Numéro de téléphone invalide')
    .optional()
    .or(z.literal('')),
  sujet: z.string().min(1, 'Veuillez choisir un sujet'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
  rgpd: z.boolean().refine((v) => v === true, 'Vous devez accepter la politique de confidentialité'),
})

type FormData = z.infer<typeof schema>

interface Props {
  subjects: string[]
}

export function ContactForm({ subjects }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
  try {
    setLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Erreur')
    }

    setSubmitted(true)
    reset()
  } catch (error) {
    alert("L'envoi du message a échoué.")
  } finally {
    setLoading(false)
  }
}

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
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary text-sm mt-2"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Row 1 : Nom + Entreprise */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom complet" required error={errors.nom?.message}>
          <input
            {...register('nom')}
            placeholder="Jean Moukoko"
            className={inputCls(!!errors.nom)}
          />
        </Field>
        <Field label="Entreprise" error={errors.entreprise?.message}>
          <input
            {...register('entreprise')}
            placeholder="Groupe Horizon (optionnel)"
            className={inputCls(false)}
          />
        </Field>
      </div>

      {/* Row 2 : Email + Téléphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email professionnel" required error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="jean@entreprise.com"
            className={inputCls(!!errors.email)}
          />
        </Field>
        <Field label="Téléphone" error={errors.telephone?.message}>
          <input
            {...register('telephone')}
            type="tel"
            placeholder="+242 06 123 45 67"
            className={inputCls(!!errors.telephone)}
          />
        </Field>
      </div>

      {/* Sujet */}
      <Field label="Sujet" required error={errors.sujet?.message}>
        <select {...register('sujet')} className={cn(inputCls(!!errors.sujet), 'bg-white')}>
          <option value="">Sélectionnez un sujet…</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field label="Message" required error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Décrivez votre projet, vos besoins ou votre question…"
          className={cn(inputCls(!!errors.message), 'resize-none')}
        />
      </Field>

      {/* RGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            {...register('rgpd')}
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-primary"
          />
          <span className="text-gray-500 text-xs leading-relaxed">
            J&apos;accepte que mes données soient utilisées pour traiter ma demande conformément à la{' '}
            <a href="/politique-confidentialite" className="text-primary hover:underline">
              politique de confidentialité
            </a>{' '}
            de NOISIM. <span className="text-primary">*</span>
          </span>
        </label>
        {errors.rgpd && (
          <p className="text-rose-500 text-xs mt-1 ml-7">{errors.rgpd.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={cn('btn-primary w-full justify-center text-base', loading && 'opacity-70 cursor-not-allowed')}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer le message
            <Send className="w-5 h-5" />
          </>
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
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-secondary mb-1.5">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-rose-500 text-xs mt-1.5">{error}</p>}
    </div>
  )
}