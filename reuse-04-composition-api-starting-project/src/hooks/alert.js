import {ref} from 'vue';

export default function useAlert(alertIsVisibleValue = false) {
    const alertIsVisible = ref(alertIsVisibleValue);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }

    return [
      alertIsVisible,
      showAlert,
      hideAlert,
    ];
}