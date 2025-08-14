import diabetes from '../assets/png/diabetes.png'
import movie from '../assets/png/movie.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Diabetes Prediction',
        projectDesc: 'This project predicts diabetes across diverse demographic groups while aiming to make the model fairer by minimizing differences in false negative rates',
        tags: ['Python'],
        code: 'https://github.com/arianarosario/DFA-project',
        demo: 'https://drive.google.com/file/d/1ZfZrwQAamnSs0-WQOb6xzCN_gIkDe7n_/view',
        image: diabetes
    },
    {
        id: 2,
        projectName: 'Movie Recommendation System Challenge',
        projectDesc: 'This project built and optimized a machine learning model to predict movie ratings, boosting performance by 15% and winning 1st place in a Google-sponsored Kaggle competition',
        tags: ['Jupyter Notebook'],
        code: 'https://github.com/hangvtran/Movie_Recommendation_System',
        demo: '',
        image: movie
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/