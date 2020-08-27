import Loadable from 'react-loadable' // Loadable 必须使用loading
import Loading from '../components/Loading'

global.Hotel = Loadable({
  loader: () => import('../components/pages/hotelManage'),
  loading: Loading,
})

global.Order = Loadable({
  loader: () => import('../components/pages/orderManage'),
  loading: Loading,
})
