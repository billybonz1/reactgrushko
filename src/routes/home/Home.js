/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container + " " + s.containerTop}>
          <div className={s.clasterStatus}>
            <h2>Состояние кластера:</h2>
            <div>
                <i className={s.icon + " " + s.iconAlert}></i>
                <span>ОК/Авария</span>
            </div>
            <div>
                <strong>Мониторинг</strong>   <span>node1</span>
            </div>
            <div>
                <strong>Обновлено:</strong>  <span>14:09:15</span>
            </div>
          </div>
          <div className={s.mainServer}>
              <i className={s.icon + " " + s.dataIcon1}></i>
              <div className={s.mainServerIp}>
                  IP: 132.0.0.01
              </div>
          </div>
          <div className={s.clasterStatus + " " + s.clasterActivity}>
                <h2>Активность Asterisk:</h2>
                <div>
                    <span>Телефонов всего</span> <div className={s.count}>15</div>
                </div>
                <div>
                    <span>Онлайн транкво всего</span>   <div className={s.count}>8</div>
                </div>
                <div>
                    <span>Онлайн активных каналов</span>   <div className={s.count}>0</div>
                </div>
                  <div>
                      <span>Вызовов</span> <div className={s.count}>15</div>
                  </div>
            </div>
        </div>
        <div className={s.container + " " + s.containerMiddle}>
            <div className={s.clasterStatus2 + " " + s.clasterStatus2Success}>
                <div>node1</div>
                <div>активная</div>
                <div>IP: 146.0.0.01</div>
            </div>
            <div className={s.node1}>
                <i className={s.icon + " " + s.dataIcon2}></i>
                <div className={s.drbd}>drbd1</div>
            </div>
            <div className={s.arrow}>
                <div>ОК/?</div>
                <i className={s.icon + " " + s.iconArrows}></i>
            </div>
            <div className={s.node2}>
                <i className={s.icon + " " + s.dataIcon3}></i>
                <div className={s.drbd}>drbd2</div>
            </div>
            <div className={s.clasterStatus2}>
                <div>node2</div>
                <div>запасная</div>
                <div>IP: 152.0.0.01</div>
            </div>
        </div>
        <div className={s.container}>
            <div className={s.servicesContainer}>
                <div className={s.service + " " + s.serviceSuccess}>
                    <i className={s.icon + " " + s.settingsIcon}></i>
                    <h2>Служба1:</h2>
                    <h3>ОК/Выкл</h3>
                    <p>Front end - отображает текущие состояние системы предоставляемое Back end`ом. Дает команды для back end</p>
                </div>
                <div className={s.service + " " + s.serviceSuccess}>
                    <i className={s.icon + " " + s.toolsIcon}></i>
                    <h2>Служба2:</h2>
                    <h3>ОК/Выкл</h3>
                    <p>Back end - демон (или по крону), работающий на каждой ноде кластера. Собирает данные для front end. Принимает команды от front end и выполняет их на нодах. Взаимодействие через SQLite или подобное. Независимое от СУБД и других служб, кроме httpd.</p>
                </div>
                <div className={s.service + " " + s.serviceInfo}>
                    <i className={s.icon + " " + s.planeIcon}></i>
                    <h2>Служба10:</h2>
                    <h3>ОК/Выкл</h3>
                    <p>Примерное изображение блоков Front end</p>
                </div>
            </div>
            <div className={s.servicesContainer + " " + s.servicesContainer2}>
                <div className={s.service + " " + s.serviceSuccess}>
                    <i className={s.icon + " " + s.settingsIcon}></i>
                    <h2>Служба1:</h2>
                    <h3>ОК/Выкл</h3>
                    <p>Front end - отображает текущие состояние системы предоставляемое Back end`ом. Дает команды для back end</p>
                </div>
                <div className={s.service + " " + s.serviceDanger}>
                    <i className={s.icon + " " + s.toolsIcon}></i>
                    <h2>Служба2:</h2>
                    <h3>ОК/Выкл</h3>
                    <p>Back end - демон (или по крону), работающий на каждой ноде кластера. Собирает данные для front end. Принимает команды от front end и выполняет их на нодах. Взаимодействие через SQLite или подобное. Независимое от СУБД и других служб, кроме httpd.</p>
                </div>
                <div className={s.service + " " + s.serviceDanger}>
                    <i className={s.icon + " " + s.planeIcon}></i>
                    <h2>Служба10:</h2>
                    <h3>ОК/Выкл</h3>
                    <p>Примерное изображение блоков Front end</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
