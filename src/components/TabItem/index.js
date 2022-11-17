// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateActiveTabId, isActiveTab} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActiveTab ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    onUpdateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
