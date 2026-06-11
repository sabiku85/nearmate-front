import { useAuthStore } from '~~/stores/auth'
import { useOnboardingStore } from '~~/stores/onboarding'

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()
  const onboarding = useOnboardingStore()

  if (auth.isAuthenticated && !auth.isOnboardingComplete) {
    return navigateTo(`/onboarding/step-${onboarding.lastCompletedStep + 1}`)
  }
})
