import usePopup from "@/hooks/usePopup";
import RegisterModal from "../components/register-modal/index.vue";
import LoginModal from "../components/login-modal/index.vue";

export default () => {
    function openRegisterModal() {
        const popup = usePopup<{
          isShouldClose: () => void;
        }>({
          props: {
            isShouldClose: () => {
              popup.close();
            },
          },
          slots: {
            default: () => h(RegisterModal, {
              close: () => popup.close()
            }),
          },
        });
      }

      function openLoginModal() {
        const popup = usePopup<{
          isShouldClose: () => void;
        }>({
          props: {
            isShouldClose: () => {
              popup.close();
            },
          },
          slots: {
            default: () =>
              h(LoginModal, {
                close: () => popup.close(),
              }),
          },
        });
      }
      
      return {
        openRegisterModal,
        openLoginModal
      }
};