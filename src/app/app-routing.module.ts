import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

   {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
  },   
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'workout-detail',
    loadChildren: () => import('./workout-detail/workout-detail.module').then( m => m.WorkoutDetailPageModule)
  },
  {
    path: 'start-workout',
    loadChildren: () => import('./start-workout/start-workout.module').then( m => m.StartWorkoutPageModule)
  },
  {
    path: 'rest',
    loadChildren: () => import('./rest/rest.module').then( m => m.RestPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'alarm',
    loadChildren: () => import('./alarm/alarm.module').then( m => m.AlarmPageModule)
  },
  {
    path: 'set-alarm',
    loadChildren: () => import('./set-alarm/set-alarm.module').then( m => m.SetAlarmPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then( m => m.BlogsPageModule)
  },
  {
    path: 'read-blog',
    loadChildren: () => import('./read-blog/read-blog.module').then( m => m.ReadBlogPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'object-detection',
    loadChildren: () => import('./object-detection/object-detection.module').then( m => m.ObjectDetectionPageModule)
  },
  {
    path: 'routine-categories',
    loadChildren: () => import('./routine-categories/routine-categories.module').then( m => m.RoutineCategoriesPageModule)
  },
  {
    path: 'routine-category-level-workouts',
    loadChildren: () => import('./routine-category-level-workouts/routine-category-level-workouts.module').then( m => m.RoutineCategoryLevelWorkoutsPageModule)
  },
  {
    path: 'workout-routine-detail',
    loadChildren: () => import('./workout-routine-detail/workout-routine-detail.module').then( m => m.WorkoutRoutineDetailPageModule)
  },
  {
    path: 'routine-categories-filter',
    loadChildren: () => import('./routine-categories-filter/routine-categories-filter.module').then( m => m.RoutineCategoriesFilterPageModule)
  },
  {
    path: 'excercise-list',
    loadChildren: () => import('./components/excercise/excercise.module').then( m => m.ExcerciseModule)
  },
  {
    path: 'routine-level-detail',
    loadChildren: () => import('./components/routine-level-detail/routine-level-detail.module').then( m => m.RoutineLevelDetailModule)
  },  {
    path: 'equipment-detected-detail',
    loadChildren: () => import('./equipment-detected-detail/equipment-detected-detail.module').then( m => m.EquipmentDetectedDetailPageModule)
  },
  {
    path: 'exercise-levels',
    loadChildren: () => import('./exercise-levels/exercise-levels.module').then( m => m.ExerciseLevelsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
