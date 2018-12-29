import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './approvalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!!!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Long"
                    Time="Today at 5:00 P.M"
                    Content="Hello"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Duy"
                    Time="Today at 2:00 P.M"
                    Content="World"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>


    );
};

ReactDOM.render(<App />, document.querySelector('#root'));