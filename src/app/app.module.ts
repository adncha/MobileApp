import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from "@angular/http";
import {NgModule, ErrorHandler} from '@angular/core';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {InAppBrowser} from '@ionic-native/in-app-browser';
import {SplashScreen} from '@ionic-native/splash-screen';

import {IonicStorageModule} from '@ionic/storage';

import {ConferenceApp} from './app.component';

// Import the AF2 Module
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCD_UM1vvPtVofEpYLg9A5XWfpBQwn0cKg",
  authDomain: "spotfields-5d497.firebaseapp.com",
  databaseURL: "https://spotfields-5d497.firebaseio.com",
  projectId: "spotfields-5d497",
  storageBucket: "spotfields-5d497.appspot.com",
  messagingSenderId: "301511544183"
};


import {AboutPage} from '../pages/about/about';
import {PopoverPage} from '../pages/about-popover/about-popover';
import {AccountPage} from '../pages/account/account';
import {LoginPage} from '../pages/login/login';
import {MapPage} from '../pages/map/map';
import {SchedulePage} from '../pages/schedule/schedule';
import {ScheduleFilterPage} from '../pages/schedule-filter/schedule-filter';
import {SessionDetailPage} from '../pages/session-detail/session-detail';
import {SignupPage} from '../pages/signup/signup';
import {SpeakerDetailPage} from '../pages/speaker-detail/speaker-detail';
import {SpeakerListPage} from '../pages/speaker-list/speaker-list';
import {TabsPage} from '../pages/tabs-page/tabs-page';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {SupportPage} from '../pages/support/support';
import {GamePage} from "../pages/game/game";

import {ConferenceData} from '../providers/conference-data';
import {UserData} from '../providers/user-data';
import {TeamHubPage} from "../pages/team-hub/team-hub";
import {GamesPage} from "../pages/games/games";
import {ProfilePage} from "../pages/profile/profile";
import {Databaseservice} from '../providers/databaseservice/databaseservice';
import {SettingsPage} from "../pages/settings/settings";
import {TeamSettingsPage} from "../pages/team-settings/team-settings";
import {TeamProfilePage} from "../pages/team-profile/team-profile";
import {TeamInvitesPage} from "../pages/team-invites/team-invites";
import {TeamSwitchPage} from "../pages/team-switch/team-switch";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {SignInPage} from "../pages/sign-in/sign-in";
import {CreateTeamPage} from "../pages/create-team/create-team";
import {BotIntroPage} from "../pages/bot-intro/bot-intro";
import {ChoosePicturePage} from "../pages/choose-picture/choose-picture";
import {ChooseLevelPage} from "../pages/choose-level/choose-level";
import {ChooseAvailabilitiesPage} from "../pages/choose-availabilities/choose-availabilities";


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    TeamHubPage,
    GamesPage,
    GamePage,
    ProfilePage,
    SettingsPage,
    TeamSettingsPage,
    TeamProfilePage,
    TeamInvitesPage,
    TeamSwitchPage,
    SignUpPage,
    SignInPage,
    CreateTeamPage,
    BotIntroPage,
    ChoosePicturePage,
    ChooseLevelPage,
    ChooseAvailabilitiesPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(
      firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(ConferenceApp, {
      tabsPlacement: 'bottom'
    }, {
      links: [{
        component: TabsPage,
        name: 'TabsPage',
        segment: 'tabs-page'
      }, {
        component: SchedulePage,
        name: 'Schedule',
        segment: 'schedule'
      }, {
        component: SessionDetailPage,
        name: 'SessionDetail',
        segment: 'sessionDetail/:sessionId'
      }, {
        component: ScheduleFilterPage,
        name: 'ScheduleFilter',
        segment: 'scheduleFilter'
      }, {
        component: SpeakerListPage,
        name: 'SpeakerList',
        segment: 'speakerList'
      }, {
        component: SpeakerDetailPage,
        name: 'SpeakerDetail',
        segment: 'speakerDetail/:speakerId'
      }, {
        component: MapPage,
        name: 'Map',
        segment: 'map'
      }, {
        component: AboutPage,
        name: 'About',
        segment: 'about'
      }, {
        component: TutorialPage,
        name: 'Tutorial',
        segment: 'tutorial'
      }, {
        component: SupportPage,
        name: 'SupportPage',
        segment: 'support'
      }, {
        component: LoginPage,
        name: 'LoginPage',
        segment: 'login'
      }, {
        component: AccountPage,
        name: 'AccountPage',
        segment: 'account'
      }, {
        component: SignupPage,
        name: 'SignupPage',
        segment: 'signup'
      }, {
        component: TeamHubPage,
        name: 'TeamHubPage',
        segment: 'teamhub'
      }, {
        component: GamesPage,
        name: 'GamesPage',
        segment: 'games'
      }, {
        component: ProfilePage,
        name: 'ProfilePage',
        segment: 'profile'
      }]
    }), IonicStorageModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    TeamHubPage,
    GamesPage,
    GamePage,
    ProfilePage,
    SettingsPage,
    TeamSettingsPage,
    TeamProfilePage,
    TeamInvitesPage,
    TeamSwitchPage,
    SignUpPage,
    SignInPage,
    CreateTeamPage,
    BotIntroPage,
    ChoosePicturePage,
    ChooseLevelPage,
    ChooseAvailabilitiesPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    Databaseservice
  ]
})
export class AppModule {
}
