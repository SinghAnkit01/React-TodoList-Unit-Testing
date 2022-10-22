import  {render , screen} from '@testing-library/react';
import Addtodo from '../Addtodo';
import Todos from '../Todos';
import TodoItem from '../TodoItem';


test('Should render todo component', () => { 
// render is a method comes from react-testing-library
    render(

        <Addtodo />
       

    )

 })

 test('Should render Todos component', () => { 
    // render is a method comes from react-testing-library
        render(
    
            <Todos />
           
    
        )
    
     })

     test('Should render TodoItem component', () => { 
        // render is a method comes from react-testing-library
            render(
        
                <TodoItem />
               
        
            )
            const TodoElement = screen.getByTestId("todo-test");
            // screen doesn't receive any item with id='todo-test' in TodoItem.js file.
            // <button className="btn btn-sm btn-danger" onClick={ () => {onDelete(todo)}} >Delete</button>
            // this element doesn't contain any id only classname with="btn btn-sm btn-danger".

            // check whether the component is present in dom or not
            // means check whether the TodoElement is present in TodoItem.js file or not
            expect(TodoElement).toBeInTheDocument();
            // Document() in the sense TodoItem.js file
            // pass means Document is rendered in dom

            // TodoElement.style.display="none";
         })

         test('Should render our component', () => { 
            // render is a method comes from react-testing-library

            const todo = {title:'Delete', desc:'go to market'};
            // screen values
                render(
            
                    <TodoItem todo={todo} />
                   
            
                )
                const TodoElement1 = screen.getByTestId("todo-test");

                // to check whether title and desc are visible at screen or not
                expect(TodoElement1).toHaveTextContent('Delete');
                // expect(TodoElement).toHaveTextContent('go to market');


                // we can also check for particular tag is present or not
                expect(TodoElement1).toContainHTML('</button>');
               

                // to check for negative scenario
                expect(TodoElement1).not.toContainHTML('<h3>');
                // if tag is present return failed or if return pass

                })

                // to match snapshot
                



 
// dummy test case
// test('First Test', () => { 

//     expect(false).toBe(true);
//     // i have received false but expectation is true
//  })

// actual test case
// check weather the component is render to dom or not