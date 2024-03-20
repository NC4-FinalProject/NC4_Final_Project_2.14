import React, {useEffect, useRef, useState} from 'react';
import '../../scss/ui/SelectBox.scss';

const SelectBox = ({label, options, fontSize, onSelectChange}) => {
    // props가 없을 경우 기본값 설정
    if (!options) {
        options = ['선택하세요'];
    }

    // 선택된 옵션 상태값
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelectChange(option);
    };

    // 외부 클릭 감지 로직
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false); // Ref 객체 밖의 클릭을 감지하면 드롭다운 닫기
            }
        }

        // 클릭 이벤트 리스너 등록
        document.addEventListener('mousedown', handleClickOutside);

        // 클린업 함수에서 이벤트 리스너 제거
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]); // 의존성 배열에 wrapperRef를 추가

    return (
        <div className="SelectBox" onClick={toggleDropdown} ref={wrapperRef}>
            {label !== undefined && label !== "" &&
                <span className="label">{label}</span>}
            {label !== undefined && label === "" &&
                <span className="label-placeholder">&nbsp;</span>}
            <div className="SelectArea">
                <div className="SelectTrigger"><span style={{fontSize: fontSize}}>{selectedOption}</span></div>
                <div className={`SelectOptions ${isOpen ? 'open' : ''}`}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`SelectOption ${selectedOption === option ? 'selected' : ''}`}
                            onClick={() => handleSelect(option)}
                            style={{fontSize: fontSize}}
                        >
                            {/* 받아온 배열의 값을 표출 */}
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

SelectBox.defaultProps = {fontSize: '1rem'}

export default SelectBox;