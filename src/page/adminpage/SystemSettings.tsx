import './SystemSettings.scss';

export default function SystemSettings() {
  return (
    <div className="system-settings-page">
      <div className="page-header">
        <div className="header-titles">
          <div className="title-row">
            <h2>시스템 설정 및 권한 관리</h2>
            <span className="subtitle">System & Permission Settings</span>
          </div>
          <p className="description">터미널 직원 계정 생성 및 권한 설정</p>
        </div>
        <div className="header-actions">
          <button className="btn-outline">권한 변경 이력</button>
          <button className="btn-primary">신규 계정 생성</button>
        </div>
      </div>

      <div className="stats-cards">
        <div className="stat-card">
          <span className="stat-label">전체 계정</span>
          <div className="stat-value"><strong>18</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">센터장</span>
          <div className="stat-value text-blue"><strong>1</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">반장</span>
          <div className="stat-value text-green"><strong>4</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">CS 담당</span>
          <div className="stat-value text-orange"><strong>3</strong>명</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">계정 잠금/대기</span>
          <div className="stat-value text-red"><strong>1</strong>건</div>
        </div>
      </div>

      <div className="tabs-section">
        <button className="tab-item active">계정 관리</button>
        <button className="tab-item">권한 그룹 설정</button>
        <button className="tab-item">접속 로그</button>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <span className="filter-label">권한</span>
          <div className="filter-buttons">
            <button className="filter-btn active">전체</button>
            <button className="filter-btn">센터장</button>
            <button className="filter-btn">반장</button>
            <button className="filter-btn">CS담당</button>
            <button className="filter-btn">현장직원</button>
          </div>
        </div>
        <div className="search-box">
          <span className="search-label">검색</span>
          <input type="text" placeholder="이름 또는 아이디로 검색" />
        </div>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>아이디</th>
              <th>권한 등급</th>
              <th>소속 / 직책</th>
              <th>최근 접속</th>
              <th>계정 상태</th>
              <th>관리 액션</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>오현석</strong></td>
              <td className="text-gray">hsoh</td>
              <td>
                <span className="status-badge purple">
                  <span className="dot"></span> 센터장
                </span>
              </td>
              <td>남양주 터미널장</td>
              <td className="text-gray">오늘 08:10</td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 활성
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">권한 수정</button>
                  <button className="btn-action danger-light">계정 잠금</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>김민준</strong></td>
              <td className="text-gray">mjkim</td>
              <td>
                <span className="status-badge blue">
                  <span className="dot"></span> 반장
                </span>
              </td>
              <td>분류반 반장</td>
              <td className="text-gray">오늘 09:42</td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 활성
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">권한 수정</button>
                  <button className="btn-action danger-light">계정 잠금</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>류하경</strong></td>
              <td className="text-gray">hkryu</td>
              <td>
                <span className="status-badge orange">
                  <span className="dot"></span> CS담당
                </span>
              </td>
              <td>예외 화물 처리반</td>
              <td className="text-gray">오늘 09:15</td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 활성
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">권한 수정</button>
                  <button className="btn-action danger-light">계정 잠금</button>
                </div>
              </td>
            </tr>
            <tr className="row-alert">
              <td><strong>신동훈</strong></td>
              <td className="text-gray">dhshin</td>
              <td>
                <span className="status-badge grey">
                  <span className="dot"></span> 현장직원
                </span>
              </td>
              <td>상차반</td>
              <td className="text-gray">3일 전</td>
              <td>
                <span className="status-badge red">
                  <span className="dot"></span> 잠금
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action success-light">잠금 해제</button>
                  <button className="btn-action">권한 수정</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>백나윤</strong></td>
              <td className="text-gray">nybaek</td>
              <td>
                <span className="status-badge blue">
                  <span className="dot"></span> 반장
                </span>
              </td>
              <td>하차반 반장</td>
              <td className="text-gray">오늘 07:50</td>
              <td>
                <span className="status-badge green">
                  <span className="dot"></span> 활성
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-action">권한 수정</button>
                  <button className="btn-action danger-light">계정 잠금</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="pagination-container">
          <span className="pagination-info">전체 18명 중 1-5명 표시</span>
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn next">›</button>
          </div>
        </div>
      </div>

      <div className="footer-note">
        권한 등급은 센터장, 반장, CS담당, 현장직원으로 구분되며 각 등급별로 접근 가능한 메뉴가 다르게 설정됩니다. [권한 수정]에서 등급별 메뉴 접근 범위를 세부 조정할 수 있습니다.
      </div>
    </div>
  );
}
