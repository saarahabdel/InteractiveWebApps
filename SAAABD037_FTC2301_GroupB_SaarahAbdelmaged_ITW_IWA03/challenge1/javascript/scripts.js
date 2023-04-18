// scripts.js

import {company} from './configuration.js'
import {year} from './configuration.js'

const message = '© ' + company +  ' (' + year + ')'

document.querySelector('footer').innerText = message



/**
 * Why did the original code not work?
 * (no curly brackets around variables, 'from' spelt wrong 
     other js file not linked properly.)
 
 * What changes did you need to make to achieve the intended behaviour?
 * Why did the change result in the intended behaviour?
 * Are there any other ways in which it could have been solved?
 */

/** scripts.js

import company form 'configuration'
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
*/
