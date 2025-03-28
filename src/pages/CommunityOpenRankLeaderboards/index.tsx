import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function CommunityOpenRankLeaderboards({ location }): JSX.Element {
  const currentPath = location.pathname;
  const pathes = currentPath.split('/');
  const param = pathes[pathes.length - 1];
  return (
    <div className='no-footer'>
      <Layout>
        <iframe className={styles.mainRankingList} src='https://tyn1998.github.io/community-openrank-leaderboard/?organization=antgroup&project=antd&timeUnit=month&timeValue=1739635200000'></iframe>
      </Layout>
    </div>
  );
}
