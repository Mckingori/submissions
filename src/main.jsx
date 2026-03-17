import ReactDOM from 'react-dom/client'
import App from './App'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))
const refresh = () => {//the render method
    root.render(
        <App counter={counter} />
    )
}
setInterval(() => {//making repeatted calls  to the render maethod
    refresh()
    counter += 1
}, 1000)

