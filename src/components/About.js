import React from 'react'

const About = () => {
    return (
        <div className="container">
            <div id="maintitle">
                <div className="title">CAREER</div>
                <table>
                    <tr>
                        <td>Name</td>
                        <th>増戸潤弥</th>
                    </tr>
                    <tr>
                        <td>Birthday</td>
                        <th>1987/11/22</th>
                    </tr>
                </table>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">～2018年　設計や伝統工芸品、企画開発などの仕事をしていた</li>
                    <li class="list-group-item">2018年　javaでのプログラミングを開始</li>
                    <li class="list-group-item">2019年　システム会社に入り自社開発とSESで開発に携わり、Javascript、PHPなどで顧客ログインシステムやHPのコーディングなどを行う</li>
                    <li class="list-group-item">2020年　スキルアップを図るために他社を面接し数社内定を頂き入社予定日も決まっていたが、新型コロナの影響を受け内定が無くなり転職活動再開</li>
                </ul>
            </div>
        </div>
    )
}

export default About;