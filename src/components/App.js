import React from 'react'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Work from './Work'
import Skill from './Skill'


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
    //let guestName = prompt('ようこそ、お名前を教えてください');
    const guestName = "ゲスト";

    return (
 
        <Router>
                <Header />
                <Menu guest={guestName} />
                <div className="container">
                    <div className="border border-primary">
                        <Switch>
                            <Route path="/" exact component={Home} />{/*トップに飛ぶルート*/}
                            <Route path="/about" component={About} />{/*アバウトに飛ぶルート*/}
                            <Route path="/skill" component={Skill} />{/*スキルに飛ぶルート*/}
                            <Route path="/work" component={Work} />{/*メニューに飛ぶルート*/}
                            <Route path="/contact" component={Contact} />{/*コンタクトに飛ぶルート*/}
                        </Switch>
                    </div>
                </div>
                <Footer />

        </Router>
    )

}

export default App;