import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import json from './assets/json.json';
import image from './assets/image.jpg';
import xml from './assets/xml.xml';
import csv from './assets/csv.csv';
import './styles/less.less';

const post = new Post('webpack post title', image);

$('pre').addClass('code').html(post.toString());

console.log(post.toString());

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);