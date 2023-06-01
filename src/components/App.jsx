import Profile from './Profile/Profile'
import userData from './Profile/userData.json'

import Statistics from './Statistics/Statistics';
import StatisticsData from './Statistics/statisticsData.json'

import FriendList from './FriendList/FriendList'
import friends from './FriendList/friendsData.json'



export const App = () => {
  return (
    <div >
      <Profile
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}/>

      <Statistics
      title="Upload stats"
      stats={StatisticsData}/>

      <FriendList friends={friends} />

    </div>

    
    
  );
};
