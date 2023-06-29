# [React week1 exam](https://react-week1-exam.vercel.app/)
### by gunhoray using javascript, react, html, css

![Screenshot 2023-06-29 at 10 06 24 AM](https://github.com/gunhoray/react-week1-exam/assets/88648468/0b996d34-9694-4b1e-ba72-776f3d2d6b94)


## assingments of this project 
* useState와 이벤트 핸들러를 이용해서 프로젝트를 완성

## functions of this project 
* - App.js와 App.css 만 사용해서 코드와 스타일 코드를 작성
* - input에 제목을 쓰고, [추가하기] 버튼을 클릭하면 todo가 추가되어 화면에 렌더링

## blueprint of the project

* App.jsx
  * function App
     * states : item
       
     * input states : title(for receiving changes in title input)
   
     * titleHandler : storing (event.target.value) in title through setTitle taking (event) as parameter
   
     * addbtnHandler : click action to add newpost (data from title input)
        * verify if user is adding empty data
        * if not, give 'id' by adding 1 to item.id & 'title' 
        * store newItem to item by setItem
        * than, empty setTitle input
          
  * Return
     * input : TITLE 
     * button : 추가하기
     * h1 : MY TO-DO LIST
     * div 'item-Box'
        * posts.map : to show user's items those were produced 

* App.css
  * centered : to make whole section centered
  * whole-Box : contain whole elements
  * input-Box : contain input and a button
  * title-Box : "Todo List"
  * item-Box : contains produced items
  * item-style : style of items
  * item-title : styling content of the item

## Difficulties encountered during this project
* While constructing CSS had to find word-wrap to make content fit into the item ⭐️
