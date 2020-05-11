import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json.json';
import image from './assets/image.jpg';
import xml from './assets/xml.xml';
import csv from './assets/csv.csv';
import './styles/less.less';
import './styles/scss.scss';
import './babel';
import React from 'react';
import {render} from 'react-dom';

const post = new Post('webpack post title', image);

$('pre').addClass('code').html(post.toString());

console.log(post.toString());

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);

const App = () => (
    <main>
        <h1>Webpack Course</h1>
        <hr />
        <div className="img-container" />
        <hr />
        <pre />
        <hr />
        <div className="box">
            <h2>Less</h2>
        </div>
        <hr />
        <div className="card">
            <h2>Sass</h2>
        </div>
    </main>
);

render(<App />, document.getElementById('app'));