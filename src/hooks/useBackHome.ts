import router from '@/router/index'

function backHome() {
  router.push({ path: '/' })
}

function useBackHome() {
  return { backHome }
}

export default useBackHome
