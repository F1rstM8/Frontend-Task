import { useSelector } from 'react-redux';
import './ContestPage.scss';

const ContestPage = () => {
  const { currentContest } = useSelector((state) => state.contestData);
  const { user } = useSelector((state) => state.userData);

  
  const canViewEmail = user && (user.role === 'creator' || user.role === 'creative');

  if (!currentContest) return <div>Loading...</div>;

  return (
    <div className="contest-page">
      <div className="contest-content">
        <div className="tabs">
          <button className="tab active">Brief</button>
          <button className="tab">Offer</button>
        </div>
        
        <div className="brief-details">
          <div className="detail-row">
            <h4>Contest Type</h4>
            <p>name</p>
          </div>
          <div className="detail-row">
            <h4>Title of the Project</h4>
            <p>{currentContest.title}</p>
          </div>
          <div className="detail-row">
            <h4>Type of Name</h4>
            <p>{currentContest.typeOfName}</p>
          </div>
          <div className="detail-row">
            <h4>Style of Name</h4>
            <p>{currentContest.styleOfName}</p>
          </div>
        </div>
      </div>

      <aside className="contest-sidebar">
        <div className="card prize-card">
          <h3>💎 ${currentContest.prize}</h3>
          <p>🕒 Going <br/> 4 days 23 hours</p>
          <p>✔️ Guaranteed prize</p>
        </div>

        <div className="card stats-card">
          <h4>Contest Stats</h4>
          <div className="stats-row">
            <span>Total Entries</span>
            <strong>{currentContest.entries}</strong>
          </div>
        </div>

        <div className="card holder-card">
          <h4>About Contest Holder</h4>
          <div className="holder-info">
            <div className="avatar">👤</div>
            <div className="holder-details">
              <span className="holder-name">{currentContest.contestHolder.displayName}</span>
              
             
              {canViewEmail && (
                <span className="holder-email">{currentContest.contestHolder.email}</span>
              )}
              
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ContestPage;