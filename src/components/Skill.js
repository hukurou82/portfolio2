import React from 'react'

const Skill = () => {
    return (
        <div className="container">
            <div id="maintitle">
                <div className="title">SKILL</div>
                <div class="row">
                    <div class="col-xs-12 col-md-4 text-center">
                        <div class="thumbnail">
                            <img className="img-size" src="img/html.png" />
                            <h3>HTML/CSS</h3>
                            <p>基本的なHTML5、CSSは業務において使用。</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <div class="thumbnail">
                            <img className="img-size" src="img/react.png" />
                            <h3>Javascript</h3>
                            <p>フロントでReactを用いて開発を行う。ポートフォリオサイトもReactを用いて作成。<br />
                               現在はReact × Firebase × Material-UIでチャットボットを作成中</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <div class="thumbnail">
                        <img className="img-size" src="img/java.png" />
                            <h3>Java</h3>
                            <p>ログイン機能や小規模な掲示板を開発。フレームワークはspringbootを使用</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-4 text-center">
                        <div class="thumbnail">
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <div class="thumbnail">
                            <img className="img-size" src="img/php.png" />
                            <h3>PHP</h3>
                            <p>スクラッチ開発でCRUDを作成。またログイン機能なども実装。フレームワークではLaravelを使用</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center">
                        <div class="thumbnail">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;