<script setup lang="ts">
import { useOnboardingStore } from "~~/stores/onboarding";

definePageMeta({ middleware: "auth" });

const onboarding = useOnboardingStore();

await navigateTo(`/onboarding/step-${onboarding.lastCompletedStep + 1}`);
</script>
