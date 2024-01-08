import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';
import localeHomeIndex from '@/views/home/locale/zh-CN';
import localeUserManger from '@/views/systemManger/userManger/locale/zh-CN';
import localeRoleManger from '@/views/systemManger/roleManger/locale/zh-CN';
import localeMovieManger from '@/views/systemManger/movieManger/locale/zh-CN';
import localeCinemaManger from '@/views/systemManger/cinemaManger/locale/zh-CN';
import localeHallManger from '@/views/systemManger/hallManger/locale/zh-CN';
import localeShowtimeManger from '@/views/systemManger/showtimeManger/locale/zh-CN';
import localeCommentManger from '@/views/systemManger/commentManger/locale/zh-CN';
import localeOrderManger from '@/views/systemManger/orderManger/locale/zh-CN';
import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.home': '首页',
  'menu.systemManger': '系统管理',
  'menu.userManger': '用户管理',
  'menu.roleManger': '角色管理',
  'menu.movieManger': '电影管理',
  'menu.cinemaManger': '影院管理',
  'menu.hallManger': '放映厅管理',
  'menu.showtimeManger': '场次管理',
  'menu.commentManger': '评论管理',
  'menu.orderManger': '订单管理',
  'menu.home.index': '首页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeHomeIndex,
  ...localeUserManger,
  ...localeRoleManger,
  ...localeMovieManger,
  ...localeCinemaManger,
  ...localeHallManger,
  ...localeShowtimeManger,
  ...localeCommentManger,
  ...localeOrderManger,
};
