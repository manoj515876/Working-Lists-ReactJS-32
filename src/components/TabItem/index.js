import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabDetails, changeList} = this.props
    const {displayText, tabId} = tabDetails
    const onChangeList = () => {
      changeList(tabId)
    }
    return (
      <li className="tab-item-container ">
        <button type="button" className="tab-btn" onClick={onChangeList}>
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
