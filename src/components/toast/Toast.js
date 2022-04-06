import { toast } from 'react-toastify'

export const Toast = (text, theme) => {
  const notify = () => {
    toast[theme](text, {
      position: 'bottom-center',
      autoClose: 2000,
      theme: 'dark',
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  notify()
}