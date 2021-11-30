// routes
import Widgets from 'Routes/widgets';
import Pages from 'Routes/pages';
import AdvanceUIComponents from 'Routes/advance-ui-components';
import CalendarComponents from 'Routes/calendar';
import ChartsComponents from 'Routes/charts';
import FormElements from 'Routes/forms';
import TabForms from 'Routes/forms/tab-forms';
import StepperForms from 'Routes/forms/stepper-forms';
import Users from 'Routes/users';
import Components from 'Routes/components';
import Tables from 'Routes/tables';
import Icons from 'Routes/icons';
import Maps from 'Routes/maps';
import DragAndDrop from 'Routes/drag-drop';
import Editor from 'Routes/editor';
import Ecommerce from 'Routes/ecommerce';
import Dashboard from 'Routes/dashboard';
import Crm from 'Routes/crm';
import ImageCropper from 'Routes/image-cropper';
import VideoPlayer from 'Routes/video-player';
import Dropzone from 'Routes/dropzone';
import CarouselElement from 'Routes/carousel';
import UserbuyerrightsElement from 'Routes/userbuyerrights';
import MenurightsElement from 'Routes/menurights';
import MenulistsElement from 'Routes/menulists';
import TimelineElement from 'Routes/timeline'; 
import AdvanceFormElement from 'Routes/advanced-forms';
import CustomizedFormElement from 'Routes/customized-form';
import  AsyncForecastComponent from 'Routes/pre-production';
import AsyncMastersComponent from 'Routes/masters';


// async component
import {
   AsyncAboutUsComponent,
   AsyncChatComponent,
   AsyncMailComponent,
   AsyncTodoComponent,
} from 'Components/AsyncComponent/AsyncComponent';

export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'crm',
      component: Crm
   },
   {
      path: 'widgets',
      component: Widgets
   },
   {
      path: 'ecommerce',
      component: Ecommerce
   },
   {
      path: 'icons',
      component: Icons
   },
   {
      path: 'about-us',
      component: AsyncAboutUsComponent
   },
   {
      path: 'pages',
      component: Pages
   },
   {
      path: 'chat',
      component: AsyncChatComponent
   },
   {
      path: 'mail',
      component: AsyncMailComponent
   },
   {
      path: 'todo',
      component: AsyncTodoComponent
   },
   {
      path: 'charts',
      component: ChartsComponents
   },
   {
      path: 'tables',
      component: Tables
   },
   {
      path: 'maps',
      component: Maps
   },
   {
      path: 'users',
      component: Users
   },
   {
      path: 'ui-components',
      component: Components
   },
   {
      path: 'advanced-component',
      component: AdvanceUIComponents
   },
   {
      path: 'drag-andDrop',
      component: DragAndDrop
   },
   {
      path: 'forms',
      component: FormElements
   },
   {
      path: 'stepper-forms',
      component: StepperForms
   },
   
   {
      path: 'tabs',
      component: TabForms
   },
   {
      path: 'editor',
      component: Editor
   },
   {
      path: 'calendar',
      component: CalendarComponents
   },
   {
      path: 'image-cropper',
      component: ImageCropper
   },
   {
      path: 'carousel',
      component: CarouselElement
   },{
      path: 'user_buyer_rights',
      component: UserbuyerrightsElement
   },
   {
      path: 'menu_rights',
      component: MenurightsElement
   },{
      path: 'menu_lists',
      component: MenulistsElement
   },
   {
      path: 'timeline',
      component: TimelineElement
   },
   {
      path: 'video-player',
      component: VideoPlayer
   },
   {
      path: 'dropzone',
      component: Dropzone
   },
   {
      path: 'simple-form',
      component: AdvanceFormElement
   },
   {
      path: 'customized-form',
      component: CustomizedFormElement
   },
   {
      path: 'pre-production',
      component: AsyncForecastComponent
   },
   {
      path: 'Masters',
      component: AsyncMastersComponent
   },
   
]