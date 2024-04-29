!function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=new(function(){var e;function r(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this.startX=null,this.startY=null,this.endX=null,this.endY=null,this.initializeBoard(),this.addKeyboardListeners(),this.handleSwipe();var t=document.querySelector(".game-field");t.addEventListener("touchstart",this.handleTouchStart.bind(this)),t.addEventListener("touchend",this.handleTouchEnd.bind(this))}return e=[{key:"handleTouchStart",value:function(e){this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY}},{key:"handleTouchEnd",value:function(e){this.endX=e.changedTouches[0].clientX,this.endY=e.changedTouches[0].clientY,this.handleSwipe()}},{key:"handleSwipe",value:function(){var e=this.endX-this.startX,t=this.endY-this.startY;Math.abs(e)>Math.abs(t)?e>0?this.moveRight():this.moveLeft():t>0?this.moveDown():this.moveUp(),this.boardMessage()}},{key:"initializeBoard",value:function(){this.rows=4,this.columns=4,this.getState(),this.getScore()}},{key:"findEmptyCells",value:function(){for(var e=[],t=0;t<this.rows;t++)for(var r=0;r<this.columns;r++)0===this.board[t][r]&&e.push({row:t,column:r});return e}},{key:"createCell",value:function(){var e=this.findEmptyCells();if(e.length>0){var t=Math.floor(Math.random()*e.length),r=e[t],i=this.generateRandomNumber();this.board[r.row][r.column]=i,e.splice(e.indexOf(r),1)}}},{key:"generateRandomNumber",value:function(){return .9>Math.random()?2:4}},{key:"renderBoard",value:function(){var e=document.querySelector(".game-field tbody");e.innerHTML="";for(var t=0;t<this.rows;t++){for(var r=document.createElement("tr"),i=0;i<this.columns;i++){var n=document.createElement("td");n.classList.add("field-cell");var s=this.board[t][i];n.innerText=s||"",s&&(n.classList.add("field-cell--".concat(s)),n.classList.add("field-cell--active")),n.class=t.toString()+"-"+i.toString(),r.appendChild(n)}e.appendChild(r)}}},{key:"addKeyboardListeners",value:function(){var e=this;document.addEventListener("keydown",function(t){"ArrowLeft"===t.key&&e.moveLeft(),"ArrowRight"===t.key&&e.moveRight(),"ArrowUp"===t.key&&e.moveUp(),"ArrowDown"===t.key&&e.moveDown(),e.boardMessage()})}},{key:"filterZeroRow",value:function(e){return e.filter(function(e){return 0!==e})}},{key:"slideLeft",value:function(e){for(var t=this.filterZeroRow(e),r=0;r<t.length;r++)t[r]===t[r+1]&&(t[r]*=2,t[r+1]=0,this.score+=t[r]);for(t=this.filterZeroRow(t);t.length<this.columns;)t.push(0);return t}},{key:"moveLeft",value:function(){for(var e=this.board.map(function(e){return t(e)}),r=0;r<this.rows;r++){var i=this.board[r];i=this.slideLeft(i),this.board[r]=i}this.areArraysEqual(e,this.board)||this.isWinner()||this.createCell(),this.renderBoard(),this.updateScore()}},{key:"areArraysEqual",value:function(e,t){var r=function(r){if(!e[r].every(function(e,i){return e===t[r][i]}))return{v:!1}};if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++){var n=r(i);if("object"==(n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n))return n.v}return!0}},{key:"slideRight",value:function(e){for(var t=this.filterZeroRow(e),r=t.length-1;r>0;r--)t[r]===t[r-1]&&(t[r]*=2,t[r-1]=0,this.score+=t[r]);for(t=this.filterZeroRow(t);t.length<this.columns;)t.unshift(0);return t}},{key:"moveRight",value:function(){for(var e=this.board.map(function(e){return t(e)}),r=0;r<this.rows;r++){var i=this.board[r];i=this.slideRight(i),this.board[r]=i}this.areArraysEqual(e,this.board)||this.isWinner()||this.createCell(),this.renderBoard(),this.updateScore()}},{key:"filterZeroColunms",value:function(e){return e&&e.length?e.filter(function(e){return 0!==e}):[]}},{key:"slideUp",value:function(e){for(var t=this.filterZeroColunms(e),r=0;r<t.length;r++)t[r]===t[r+1]&&(t[r]*=2,t[r+1]=0,this.score+=t[r]);for(t=this.filterZeroColunms(t);t.length<this.rows;)t.push(0);return t}},{key:"transpose",value:function(e){return e[0].map(function(t,r){return e.map(function(e){return e[r]})})}},{key:"moveUp",value:function(){for(var e=this.board.map(function(e){return t(e)}),r=this.transpose(this.board),i=0;i<this.rows;i++){var n=r[i];n=this.slideUp(n),r[i]=n}this.board=this.transpose(r),this.areArraysEqual(e,this.board)||this.isWinner()||this.createCell(),this.renderBoard(),this.updateScore()}},{key:"slideDown",value:function(e){for(var t=this.filterZeroColunms(e),r=t.length-1;r>0;r--)t[r]===t[r-1]&&(t[r]*=2,t[r-1]=0,this.score+=t[r]);for(t=this.filterZeroColunms(t);t.length<this.rows;)t.unshift(0);return t}},{key:"moveDown",value:function(){for(var e=this.board.map(function(e){return t(e)}),r=this.transpose(this.board),i=0;i<this.rows;i++){var n=r[i];n=this.slideDown(n),r[i]=n}this.board=this.transpose(r),this.areArraysEqual(e,this.board)||this.isWinner()||this.createCell(),this.renderBoard(),this.updateScore()}},{key:"updateScore",value:function(){document.querySelector(".game-score").innerText=this.score}},{key:"getScore",value:function(){return this.score=0}},{key:"getState",value:function(){return this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.board}},{key:"getStatus",value:function(){var e=this.isGameOver(),t=this.isWinner();return this.isBoardEmpty()?"idle":e&&t?"win":e?"lose":"playing"}},{key:"boardMessage",value:function(){var e=document.querySelector(".message-start"),t=document.querySelector(".message-lose"),r=document.querySelector(".message-win");this.isGameOver()&&(t.classList.remove("hidden"),e.classList.add("hidden")),this.isWinner()&&(e.classList.add("hidden"),r.classList.remove("hidden"))}},{key:"isWinner",value:function(){for(var e=0;e<this.rows;e++)for(var t=0;t<this.columns;t++)if(2048===this.board[e][t])return!0;return!1}},{key:"isGameOver",value:function(){for(var e=0;e<this.rows;e++)for(var t=0;t<this.columns;t++)if(0===this.board[e][t]||e!==this.rows-1&&this.board[e][t]===this.board[e+1][t]||t!==this.columns-1&&this.board[e][t]===this.board[e][t+1])return!1;return!0}},{key:"start",value:function(){this.isBoardEmpty()&&(this.createCell(),this.createCell(),this.renderBoard())}},{key:"isBoardEmpty",value:function(){for(var e=0;e<this.rows;e++)for(var t=0;t<this.columns;t++)if(0!==this.board[e][t])return!1;return!0}},{key:"restart",value:function(){var e=document.querySelector(".message-start"),t=document.querySelector(".message-lose"),r=document.querySelector(".message-win");this.isBoardEmpty()||(t.classList.add("hidden"),e.classList.remove("hidden"),r.classList.add("hidden"),this.initializeBoard(),this.updateScore(),this.renderBoard())}}],function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(r.prototype,e),r}()),i=document.querySelector(".start"),n=document.querySelector(".message-start");i.addEventListener("click",function(){"idle"===r.getStatus()?(r.start(),i.textContent="Restart",i.classList.remove("start"),i.classList.add("restart"),n.classList.add("hidden")):(r.restart(),i.classList.remove("restart"),i.classList.add("start"),i.textContent="Start")})}();
//# sourceMappingURL=index.ed6c35a8.js.map
