import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from 'primereact/avatar';
import './container_desc.css';
import { Rating } from "primereact/rating";
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { ErrorMessage, Formik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import 'primeicons/primeicons.css';


const CommentList = () => {

  const [userdata, setUserData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [descData, setDescData] = useState({});
  const [replying, setReplying] = useState({});
  const [addReplyButton, setReplyButton] = useState(false);
  const [addReplyButton2, setReplyButton2] = useState(false);
  const [generatetext, setGeneratetext] = useState('');

  const validationSchema = Yup.object().shape({
    reviewArea: Yup.string()
      .required('Required!')
      .min(1, 'Textarea must content more than one character'),
  });

  const cancelButtonItem = (
    <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" />
  );



  const handleClick1 = () => {
    setReplyButton(!addReplyButton);

  };

  const handleClick2 = () => {
    setReplyButton2(!addReplyButton2)
    if (addReplyButton2) setGeneratetext('');
    else if (!addReplyButton2) setGeneratetext('Gene');
  };

  const UserName = (dy) => {
    for (const name of userdata) {
      if (name.id === dy) {
        return name.name;
      }
    }
  };

  const Spacer = ({ size }) => <div style={{ height: size || '10px' }} />;

  const MockComments = [
    {
      "user_id": 1,
      "product_id": 1,
      "starRating": 5,
      "id": 1,
      "userComments": [
        [
          {
            "review_id": 1,
            "text": "string",
            "originalText": "string",
            "user_id": 1,
            "id": 7,
            "lastModified": "string",
            "starRating": 0
          },
          {
            "review_id": 1,
            "text": "string",
            "originalText": "string",
            "user_id": 1,
            "id": 8,
            "lastModified": "string",
            "starRating": 10
          },
          {
            "review_id": 1,
            "text": "lksdf",
            "originalText": "taha",
            "user_id": 2,
            "id": 9,
            "lastModified": "stlkjsfdring",
            "starRating": 10
          },
          {
            "review_id": 1,
            "text": "string",
            "originalText": "string",
            "user_id": 1,
            "id": 10,
            "lastModified": "string",
            "starRating": 0
          }
        ]
      ]
    }
  ];
  

  useEffect(() => {
    // Define the API endpoint URL
    const apiUser = 'http://127.0.0.1:8000/api/users/All/';
    const apiReview = 'http://127.0.0.1:8000/api/products/1/reviews/All/';
    const apiDesc = 'http://127.0.0.1:8000/api/products/1';

    // Fetch data from the API
    axios.get(apiUser)
      .then(response => {
        // Set the fetched data to the state
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data User:', error);
      });

      setReviewData(MockComments);

    // axios.get(apiReview)
    //   .then(response => {
    //     // Set the fetched data to the state
    //     setReviewData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data Review:', error);
    //   });

    axios.get(apiDesc)
      .then(response => {
        // Set the fetched data to the state
        setDescData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data Reply:', error);
      });
  }, []);

  const AppDescription = ({ title, description }) => {


    return (<div class="container_avatar">
      <Avatar
        image="path_to_your_image.jpg" // Replace with the actual image path
        shape="square"
        size="xlarge" // You can choose from 'xsmall', 'small', 'medium', 'large', 'xlarge'
        className="p-mr-2" // Add any additional classes or styles here
      />
      <div className="description">
        <h2 className="app-description-title">{title}</h2>
        <p className="app-description-text">{description}</p>
      </div>
    </div>
    );
  };

  const Comments = ({ user_id, product_id, starRating, userComments }) => {
    const legendTemplate = (
      <div className="flex align-items-center text-primary">
        <span className="pi pi-user mr-2"></span>
        <span className="font-bold text-lg">Review User : {user_id}<div className="card flex justify-content-center">
          <Rating value={starRating} cancel={false} />
        </div></span>
      </div>);

    return (
      <div className="comment-container">
        <div className="card">
          <Fieldset legend={legendTemplate}>
            <p className="m-0">Need text from back end</p>
          </Fieldset>
        </div>
        <div className="comment">
          {userComments[0].map((replyx) => (
            <Reply
              key={replyx.id}
              user_id={replyx.user_id}
              review_id={replyx.review_id}
              text={replyx.text}
              originalText={replyx.originalText}
              lastModified={replyx.lastModified}
              starRating={replyx.starRating}
            />
          ))}
        </div>
      </div>
    );
  };

  const Reply = ({ user_id, review_id, text, originalText, lastModified, starRating, }) => {
    const legendTemplate = (
      <div className="flex align-items-center text-primary">
        <span className="pi pi-user mr-2"></span>
        <span className="font-bold text-lg">Replay User : {UserName(user_id)}</span>
      </div>);
    return (
      <div className="reply-container">
        <div className="card">
          <Fieldset legend={legendTemplate}>
            <p className="m-0"><strong>{text}</strong>
            </p>
          </Fieldset>
        </div>
      </div>
    );
  };

  return (
    <>
      <div >
        {Object.keys(descData).length > 0 && (
          <div>
            <AppDescription title={descData.name} description={descData.desc} />
          </div>)}
        {reviewData.length > 0 && (
          <Comments
            key={reviewData[0].id}
            user_id={UserName(reviewData[0].user_id)}
            product_id={reviewData[0].product_id}
            starRating={reviewData[0].starRating}
            userComments={reviewData[0].userComments}
          />
        )}
      </div>
      <div>
        <span className="p-buttonset">
          <Button
            label="Replay"
            icon={addReplyButton ? 'pi pi-times' : 'pi pi-pencil'}
            onClick={handleClick1}
            rounded
            text
            raised
            disabled={addReplyButton2}
            severity={addReplyButton ? 'danger' : 'warning'}
            aria-label={addReplyButton ? 'Cancel' : 'Notification'}
          />
          <Button
            label="Generate"
            icon={addReplyButton2 ? 'pi pi-times' : 'pi pi-globe'}
            onClick={handleClick2}
            disabled={addReplyButton}
            rounded
            text
            raised
            severity={addReplyButton2 ? 'danger' : 'warning'}
            aria-label={addReplyButton2 ? 'Cancel' : 'Notification'}
          />
        </span>
        {addReplyButton || addReplyButton2 ? (
          <div className="card flex flex-column justify-content">
            <Formik
              initialValues={{ replyArea: generatetext }}
              validateOnBlur={true}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setReplying(values.replyArea);
                setSubmitting(false);
                alert("Form Values:\n" + JSON.stringify(replying));
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} className="flex flex-column gap-2">
                  <Spacer size={15} />
                  <span className="p-float-label">
                    <InputTextarea
                      autoResize
                      id="replyArea"
                      name="replyArea"
                      rows={3}
                      cols={60}
                      value={values.replyArea}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={values.replyArea && 'p-invalid'}
                    />
                    <label htmlFor="replyArea">
                      <strong>Reply Area *</strong>
                    </label>
                  </span>
                  <ErrorMessage name="replyArea" component="div" className="p-error" />
                  <Button
                    type="submit"
                    icon="pi pi-check"
                    disabled={isSubmitting}
                    rounded
                    text
                    raised
                    severity="success"
                    aria-label="Filter"
                  />
                  <Spacer size={10} />
                </form>
              )}
            </Formik>
          </div>
        ) : null}
      </div>
    </>
  );

  //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;


  // import React, {useState, useEffect} from "react";
  // import {DataTable} from "primereact/datatable";
  // import {Column} from "primereact/column";
  // import AnswerCell from "./AnswerCell";

  // const formatDate = (dateString) => {
  //     const date = new Date(dateString);
  //     return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  // };

  // const CommentList = () => {
  //     const [comments, setComments] = useState([]);
  //     const [selectedComment, setSelectedComment] = useState(null);

  //     useEffect(() => {
  //         // TODO: Fetch comments from the Google Play Store and set them to the comments state
  //         const fetchedComments = [
  //             {
  //                 id: 1,
  //                 comment: "This app is really useful!",
  //                 date: "2022-01-01T12:34:56",
  //                 classification: "Positive",
  //                 status: true,
  //                 answer: "Thank you for your positive feedback!",
  //             },
  //             {
  //                 id: 2,
  //                 comment: "This app keeps crashing on my device.",
  //                 date: "2022-01-02T14:30:00",
  //                 classification: "Negative",
  //                 status: false,
  //                 answer: "We apologize for the inconvenience. Please contact our support team for assistance.",
  //             },
  //             {
  //                 id: 3,
  //                 comment: "Can you add a feature to export data?",
  //                 date: "2022-01-03T16:45:23",
  //                 classification: "Suggestion",
  //                 status: true,
  //                 answer: "Thank you for your suggestion. We will consider it for future updates.",
  //             },
  //         ];

  //         // TODO: Generate AI-generated answers for the comments
  //         const generatedComments = fetchedComments.map((comment) => {
  //             return {
  //                 ...comment,
  //                 answer: "AI-generated answer",
  //             };
  //         });

  //         setComments(generatedComments);
  //     }, []);

  //     const onUpdateComment = (updatedComment) => {
  //         const updatedComments = comments.map((comment) =>
  //             comment.id === updatedComment.id ? updatedComment : comment
  //         );
  //         setComments(updatedComments);
  //         // TODO: Save the updated comment to the backend
  //     };

  //     const verificationBodyTemplate = (rowData) => {
  //         const iconClassName = `pi ${
  //             rowData.status ? "pi-check p-text-success" : "pi-times p-text-danger"
  //         }`;
  //         return <i className={iconClassName}></i>;
  //     };

  //     const classificationBodyTemplate = (rowData) => {
  //         const className = `p-tag p-tag-${rowData.classification.toLowerCase()}`;
  //         return <div className={className}>{rowData.classification}</div>;
  //     };

  //     return (
  //         <div className="p-m-4">
  //             <DataTable
  //                 value={comments}
  //                 selectionMode="single"
  //                 selection={selectedComment}
  //                 onSelectionChange={(e) => setSelectedComment(e.value)}
  //             >
  //                 <Column field="comment" header="Comment" />
  //                 <Column field="date" header="Date" body={formatDate} />
  //                 <Column
  //                     field="classification"
  //                     header="Classification"
  //                     body={classificationBodyTemplate}
  //                 />
  //                 <Column field="status" header="Status" body={verificationBodyTemplate} />
  //                 <Column
  //                     field="answer"
  //                     header="Answer"
  //                     body={(rowData) => (
  //                         <AnswerCell rowData={rowData} onUpdateComment={onUpdateComment} />
  //                     )}
  //                 />
  //             </DataTable>
  //         </div>
  //     );
  // };
};
export default CommentList;
