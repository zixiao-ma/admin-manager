/**
 * @author MaZiXiao
 * @date 2022-07-08 14:25
 */
import store from '@/store/index'

export const getBtnPermission = (route) => {
  const actionList = store.getters.actionList
  let result = []
  if (route.matched[0] && route.matched[0].name) {
    let PerName = route.matched[0].name.split('-')[0]
    if (PerName.includes('_')) {
      PerName = PerName.replace('_', '-').split('-')[0]
    }
    console.log(PerName, 'PerName')
    result = actionList.filter(item => {
      return item.includes(PerName)
    })
  }
  return result
}
