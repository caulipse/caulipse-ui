import React, {useState} from "react";
import './SignupId.scss';

const SignupId = (): JSX.Element => {    

    return(
        <div>
            <div>
                <span className="nickname">닉네임</span>
                </div>
            <div>
                <input type="text" placeholder="5-7글자 사이로 입력해주세요" className="nickname-input" required min="5" max="7"/>
            </div>

            <div>
                <span className="department">단과대</span>
            </div>
            <div>
                <input type="text" placeholder="단과대학을 입력해주세요" className="department-input" />
            </div>

            <div>
                <span>학년</span>
                <span>재학상태</span>
            </div>
            <div>
            <label id="myGrade">Choose a Grade:</label>
                <select className="grade"  id="myGrade">
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                </select>

            <label id="myGrade">Choose a Status:</label>
                <select className="status"  id="myStatus">
                    <option value="재학중">재학중</option>
                    <option value="복학중">복학중</option>
                </select>                
            </div>

            <div>
                <div><input type="checkbox" className="Check1"/> 
                (필수) 이용약관 테스트
                <button className="show">보기</button>
                </div>
                <div><input type="checkbox" className="Check2"/> 
                (필수) 이용약관2 테스트
                <button className="show">보기</button>
                </div>
            </div>

            <div>
                <button type="button" id="Signed-up">가입완료!</button>
            </div> 
        </div>
    );
};

export default SignupId;