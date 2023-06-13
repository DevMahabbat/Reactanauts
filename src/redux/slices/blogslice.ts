import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Blog} from '../../types/Blog';
import axios from 'axios';


interface initialStateType {
  loading: 'rejected' | 'pending' | 'fullfilled' | null;
  blogs: Array<Blog> | any;
  error: any | null;
  blog: Blog | null;
}

const initialState: initialStateType = {
  loading: 'fullfilled',
  blogs: [],
  error: null,
  blog: null,
};

export const getAllBlogs = createAsyncThunk(
  'get/all',
  async (data, {rejectWithValue}) => {

    // console.log('loading data');

    try {
      // const res = await axios.get(
      //   'https://64731455d784bccb4a3c3e14.mockapi.io/blogs'
      // );
      // console.log("data geldi");
      

      // return res.data;

      return [
        {
          createdAt: '2023-05-29T22:36:01.601Z',
          title: 'Kkfkkdkd',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Rjenennene',
          id: '51',
          favorite: true,
        },
        {
          createdAt: '2023-05-29T20:44:00.197Z',
          title: 'Ndndnndjr',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Rjrjjrjrjr',
          id: '52',
          favorite: true,
        },
        {
          createdAt: '2023-05-30T00:23:29.271Z',
          title: '7hh',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description:
            'Ab tenetur quod placeat fugiat eveniet deserunt facilis consectetur maxime. Quidem natus blanditiis. Quod sit sed accusamus praesentium officia repudiandae animi illo animi. Possimus nesciunt temporibus architecto. Eius illo deserunt illo nihil quaerat pariatur quis animi doloremque.',
          id: '54',
          completed: false,
        },
        {
          createdAt: '2023-05-30T16:37:41.190Z',
          title: 'Ek3loə26öə26l',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: '26169pı1616ı81ı81ılüuı',
          id: '55',
        },
        {
          createdAt: '2023-05-30T18:03:34.643Z',
          title: 'Title-smitle',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Descrjjjjj',
          id: '57',
        },
        {
          createdAt: '2023-05-30T20:46:57.998Z',
          title: 'Tutlenice',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Llllll',
          id: '58',
        },
        {
          createdAt: '2023-05-30T04:11:35.957Z',
          title: 'Title',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Subtitle',
          id: '59',
        },
        {
          createdAt: '2023-05-30T17:33:50.257Z',
          title: 'Title',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Tiel',
          id: '60',
        },
        {
          createdAt: '2023-05-30T05:59:56.532Z',
          title: 'New ',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'New',
          id: '61',
        },
        {
          createdAt: '2023-05-30T20:21:18.337Z',
          title: 'Shhshs',
          avatar: 'https://loremflickr.com/640/480/nightlife',
          description: 'Sjssj',
          id: '62',
        },
      ];
    } catch (error: any) {
      rejectWithValue(error);
    }
  },
);

export const getCurrentBlog = createAsyncThunk("get/current", async (data:any, {rejectWithValue}) => {
    
    try {
      // console.log("burda1");
        let {id} = data;
      const res = await (axios.get(
        `https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${id}`)
      );
// console.log('current blog data api ', res);
      return res.data;
    } catch (error: any) {
      rejectWithValue(error);
    }

})


export const deleteBlogByID = createAsyncThunk(
  'delete',
  async (data: any, {rejectWithValue}) => {
    try {
        //  console.log('burda2');
      let {id} = data;
      const res = await axios.delete(
        `https://64731455d784bccb4a3c3e14.mockapi.io/blogs/${id}`,
      )
        if (res.data) {
          let all = await axios.get(
            'https://64731455d784bccb4a3c3e14.mockapi.io/blogs/',
          );
          return all.data;
        };
      
 
    } catch (error: any) {
      rejectWithValue(error);
    }
  },
);


const blogslice = createSlice({
  name: 'blogslice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllBlogs.pending, state => {
        state.loading = 'pending';
        // console.log('pending eledi');
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
        // console.log('reject eledi');
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = 'fullfilled';
        // console.log('fullfilled eledi');
      }) 
      
        builder
          .addCase(getCurrentBlog.pending, state => {
            state.loading = 'pending';
          })
          .addCase(getCurrentBlog.rejected, (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
          })
          .addCase(getCurrentBlog.fulfilled, (state, action) => {
            state.blog = action.payload;
            state.loading = 'fullfilled';
          })
          builder
            .addCase(deleteBlogByID.pending, state => {
              state.loading = 'pending';
            })
            .addCase(deleteBlogByID.rejected, (state, action) => {
              state.loading = 'rejected';
              state.error = action.payload;
            })
            .addCase(deleteBlogByID.fulfilled, (state, action) => {
              state.loading = 'fullfilled';
              state.blogs = action.payload;
            });
      
  },
});

export default blogslice.reducer;
