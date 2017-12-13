import HelloWorld from './components/HelloWorld'
import content from './components/content'

let routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/content',
  name: 'content',
  component: content
}];
export default routes;
