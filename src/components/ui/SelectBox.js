import React, {useEffect, useRef, useState} from 'react';
import '../../scss/ui/SelectBox.scss';

const SelectBox = ({label, options, fontSize, onSelectChange}) => {
    // options가 없거나 undefined일 경우 기본값 설정
    if (!options || typeof options !== 'object') {
        options = {};
    }

    // 선택된 옵션 상태값
    const defaultOptionKey = Object.keys(options).find(key => key === 'default');
    const firstOptionKey = defaultOptionKey ? 'default' : Object.keys(options)[0];
    const [selectedOption, setSelectedOption] = useState(firstOptionKey);

    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelectChange({key: option, value: options[option]});
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

    const renderOptions = () => {
        const defaultOption = options['default'] ? (
            <div
                key={'default'}
                className={`SelectOption ${selectedOption === 'default' ? 'selected' : ''}`}
                onClick={() => handleSelect('default')}
                style={{fontSize: fontSize}}>
                {options['default']}
            </div>
        ) : null;

        const otherOptions = Object.keys(options)
            .filter(option => option !== 'default')
            .map((option, index) => (
                <div
                    key={option}
                    className={`SelectOption ${selectedOption === option ? 'selected' : ''}`}
                    onClick={() => handleSelect(option)}
                    style={{fontSize: fontSize}}>
                    {options[option]}
                </div>
            ));

        return [defaultOption, ...otherOptions];
    };

    return (
        <div className="SelectBox" onClick={toggleDropdown} ref={wrapperRef}>
            {label !== undefined && label !== "" &&
                <span className="label">{label}</span>}
            {label !== undefined && label === "" &&
                <span className="label-placeholder">&nbsp;</span>}
            <div className="SelectArea">
                <div className="SelectTrigger"><span style={{fontSize: fontSize}}>{options[selectedOption]}</span></div>
                <div className={`SelectOptions ${isOpen ? 'open' : ''}`} style={{display: isOpen ? 'block' : 'none'}}>
                    {renderOptions()}
                </div>
            </div>
        </div>
    );
};

SelectBox.defaultProps = {fontSize: '1rem'};

export default SelectBox;