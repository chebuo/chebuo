import '../styles/productList.css'
import '../styles/history.css'
import {ProductItem} from '../components/productList.jsx'
import {data} from '../data/projects.js'

export default function History(){
  return(
    <>
        <h1>活動記録</h1>
        <div className="history-list">
          <HistoryItem/>
        </div>
    </>
    )
}

function HistoryItem(){
  return(
    <>
    {data.map((item,i)=>(
    <div className="history-item" key={i}>
      {item.title?(
        <>
      <div className="history-header">
        <span className="history-dot"/>
        <span className="history-date">{item.date}</span>
      </div>
      
      <div className="history-content">
        <ProductItem
            title={item.title}
            img={item.icon}
            description={item.description}
            technology={item.technology}
            link={item.path}
        />
      </div>
      </>
      ):(
        <>
        <div className="history-header">
          <span className="history-dot"/>
          <span className="history-date">{item.date} {item.description}</span>
        </div>
        </>
      )}
    </div>
  ))}
  </>
  )
}