import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Form } from "react-hook-form";

export const communityReg = createAsyncThunk(
    'community/reg',
    async (communityDTO, thunkAPI) => {
        console.log(communityDTO);
        
        const formData = new FormData();

        const community = {
            name: communityDTO.name,
            description: communityDTO.description,
            member: communityDTO.member,
        };

        formData.append('community', new Blob([JSON.stringify(community)], {
            type: 'application/json'
        }));

        const tags = communityDTO.tags.map((tag) => ({
            content: tag
        }));

        formData.append('tags', new Blob([JSON.stringify(tags)], {
            type: 'application/json'
        }));


        try {
            const response = await axios.post(
                `http://localhost:9090/community/reg`,
                
              formData, {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
              }
            }
            );
        
            console.log(response);
        
            return response.data.item;
        
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }

    
);


export const communityModify = createAsyncThunk(
  'community/edit',
  async (communityData, { rejectWithValue }) => {
    try {

        const formData = new FormData();
        
      formData.append('community', new Blob([JSON.stringify({
        name: communityData.name,
        description: communityData.description,
        member: communityData.member,
      })], {
        type: 'application/json'
      }));


      const tags = communityData.tags.map(tag => ({ content: tag }));
      formData.append('tags', new Blob([JSON.stringify(tags)], {
        type: 'application/json'
      }));


      if (communityData.picture) {
        formData.append('picture', communityData.picture);
      }

      const response = await axios.put(
        'http://localhost:9090/community/modify', // 수정 요청을 보낼 서버의 URL 주소
        formData,
        {
          headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`,
                        "Content-Type": "multipart/form-data"
                    }
        }
      );
            if(response.data && response.data.item) {
              alert("정상적으로 수정되었습니다.");
                window.location.reload();
            }
        } catch(e) {
            alert("에러 발생.");
            console.log(e);
        }
  }
);

// export const removeBoard = createAsyncThunk(
//     'board/removeBoard',
//     async (boardNo, thunkAPI) => {
//         try {
//             const response = await axios.delete(
//                 `http://localhost:8080/board/board/${boardNo}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${sessionStorage.getItem("ACCESS_TOKEN")}`
//                     }
//                 }
//             );

//             return response.data.pageItems;
//         } catch(e) {
//             return thunkAPI.rejectWithValue(e);
//         }
//     }
// )
