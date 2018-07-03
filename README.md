RapRepriseAPI

This API  provides RESTful service methods to get and manage information from the RapReprise application database.

## Data Model

The following diagram shows the data model for the application.

![image alt text](image_0.png)

## URL

To access the api, please use the following URL:

[https://rapreprise.herokuapp.com/](https://rapreprise.herokuapp.com/)

## Available Methods

Bellow you will find the methods with description and usage examples of request and response.

### Artist

<table>
  <tr>
    <td>Path:</td>
    <td>/artist</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available artist) , RequestParam “:id” (Retrieves Single Artist)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new Artist)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update Artist), RequestParam: “id” (Id for the Artist to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the Artist to delete)</td>
  </tr>
</table>


GET: (All)

/url/artist

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_artist": 1,        	"artist_name": "Deante' Hitchcock",        	"artist_bio": "Deante' Hitchcock is 23 years old...",        	"artist_photo": null,        	"artist_cover": null,        	"artist_sc_id": null,        	"artist_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/artist/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_artist": 1,        	"artist_name": "Deante' Hitchcock",        	"artist_bio": "Deante' Hitchcock is 23 years old...",        	"artist_photo": null,        	"artist_cover": null,        	"artist_sc_id": null,        	"artist_status": 1    	}	]}</td>
  </tr>
</table>


 

### Album

<table>
  <tr>
    <td>Path:</td>
    <td>/album</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available albums) , RequestParam “/:id” (Retrieves Single album)  RequestParam “/artist/:id” (Retrieves all albums per artist id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new album)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update album), RequestParam: “id” (Id for the album to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the album to delete)</td>
  </tr>
</table>


GET: (All)

/url/album

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_album": 1,        	"fk_artist": 1,        	"album_name": "Just A Sample",        	"album_year": 2017,        	"album_cover": "",        	"album_photo": null,        	"album_sc_id": null,        	"album_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/album/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_album": 1,        	"fk_artist": 1,        	"album_name": "Just A Sample",        	"album_year": 2017,        	"album_cover": "",        	"album_photo": null,        	"album_sc_id": null,        	"album_status": 1    	}	]}</td>
  </tr>
</table>


GET: (ByArtist)

/url/album/artist/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_album": 1,        	"fk_artist": 1,        	"album_name": "Just A Sample",        	"album_year": 2017,        	"album_cover": "",        	"album_photo": null,        	"album_sc_id": null,        	"album_status": 1    	}	]}</td>
  </tr>
</table>


### Events

<table>
  <tr>
    <td>Path:</td>
    <td>/event</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available events) , RequestParam “/:id” (Retrieves Single event)  RequestParam “/artist/:id” (Retrieves all events per artist id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new event)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update event), RequestParam: “id” (Id for the eventto update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the event to delete)</td>
  </tr>
</table>


GET: (All)

/url/event

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_event": 1,        	"fk_artist": 1,        	"event_name": "Deante' Hitchcock Performing Live!",        	"event_description": "After showcasing his stage presence at Made in America",        	"event_date": "2017-12-20T06:00:00.000Z",        	"event_hour": "08:00 p.m.",        	"event_place": "Los Angeles Shrine Expo Hall",        	"event_url": "",        	"event_status": 1    	}	]}</td>
  </tr>
</table>


GET(Single)

/url/event/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_event": 1,        	"fk_artist": 1,        	"event_name": "Deante' Hitchcock Performing Live!",        	"event_description": "After showcasing his stage presence at Made in America",        	"event_date": "2017-12-20T06:00:00.000Z",        	"event_hour": "08:00 p.m.",        	"event_place": "Los Angeles Shrine Expo Hall",        	"event_url": "",        	"event_status": 1    	}	]}</td>
  </tr>
</table>


GET:(ByArtist)

/url/event/artist/1

Reponse:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_event": 1,        	"fk_artist": 1,        	"event_name": "Deante' Hitchcock Performing Live!",        	"event_description": "After showcasing his stage presence at Made in America",        	"event_date": "2017-12-20T06:00:00.000Z",        	"event_hour": "08:00 p.m.",        	"event_place": "Los Angeles Shrine Expo Hall",        	"event_url": "",        	"event_status": 1    	}	]}</td>
  </tr>
</table>


### Video

<table>
  <tr>
    <td>Path:</td>
    <td>/video</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available videos) , RequestParam “/:id” (Retrieves Single video)  RequestParam “/artis/:id” (Retrieves all videos per artist id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new video)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update video), RequestParam: “id” (Id for the video to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the video to delete)</td>
  </tr>
</table>


GET: (All)

/url/video

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_video": 1,        	"fk_artist": 1,        	"video_name": "Ascension",        	"video_release": "2017-12-01T06:00:00.000Z",        	"video_url": "/path/to/video",        	"video_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/video/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_video": 1,        	"fk_artist": 1,        	"video_name": "Ascension",        	"video_release": "2017-12-01T06:00:00.000Z",        	"video_url": "/path/to/video",        	"video_status": 1    	}	]}</td>
  </tr>
</table>


GET: (ByArtist)

/url/video/artist/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_video": 1,        	"fk_artist": 1,        	"video_name": "Ascension",        	"video_release": "2017-12-01T06:00:00.000Z",        	"video_url": "/path/to/video",        	"video_status": 1    	}	]}</td>
  </tr>
</table>


### Song

<table>
  <tr>
    <td>Path:</td>
    <td>/song</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available songs) , RequestParam “/:id” (Retrieves Single song)  RequestParam “/artist/:id” (Retrieves all song per artist id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new song)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update song), RequestParam: “id” (Id for the song to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the song to delete)</td>
  </tr>
</table>


GET(All):

/url/song

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_song": 1,        	"fk_artist": 1,        	"song_name": "Feelings",        	"song_release": "2017-06-01T06:00:00.000Z",        	"song_cover": null,        	"song_photo": null,        	"song_sc_stream_url": null,        	"song_status": 1    	},    	{        	"pk_song": 2,        	"fk_artist": 2,        	"song_name": "Talking To God pt.2",        	"song_release": "2017-06-01T06:00:00.000Z",        	"song_cover": null,        	"song_photo": null,        	"song_sc_stream_url": null,        	"song_status": null    	}	]}</td>
  </tr>
</table>


GET(Single)

/url/song/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_song": 1,        	"fk_artist": 1,        	"song_name": "Feelings",        	"song_release": "2017-06-01T06:00:00.000Z",        	"song_cover": null,        	"song_photo": null,        	"song_sc_stream_url": null,        	"song_status": 1    	}	]}</td>
  </tr>
</table>


GET(ByArtist)

/url/song/artist/2

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_song": 2,        	"fk_artist": 2,        	"song_name": "Talking To God pt.2",        	"song_release": "2017-06-01T06:00:00.000Z",        	"song_cover": null,        	"song_photo": null,        	"song_sc_stream_url": null,        	"song_status": null    	}	]}</td>
  </tr>
</table>


### User

<table>
  <tr>
    <td>Path:</td>
    <td>/user</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available users) , RequestParam “:id” (Retrieves Single user)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new user)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update user), RequestParam: “id” (Id for the user to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the user to delete)</td>
  </tr>
</table>


POST:

/url/user

RequestBody (username):

<table>
  <tr>
    <td>{    "username":"sample@mail.com",    "password":"passphrase",    "fb_userid":"",    "tw_userid":"",    "enroll_date":"2018-02-22",    "user_status":"1"}</td>
  </tr>
</table>


RequestBody (Facebook Id):

<table>
  <tr>
    <td>{    "username":"",    "password":"",    "fb_userid":"facebook_user_id",    "tw_userid":"",    "enroll_date":"2018-02-22",    "user_status":"1"}</td>
  </tr>
</table>


RequestBody (Twitter Id):

<table>
  <tr>
    <td>{    "username":"",    "password":"",    "fb_userid":"",    "tw_userid":"twitter_id",    "enroll_date":"2018-02-22",    "user_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET: (All)

/url/user

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_user": 1,        	"username": "sample@mail.com",        	"password": "passphrase",        	"fb_userid": "",        	"tw_userid": "",        	"enroll_date": "2018-02-22T06:00:00.000Z",        	"user_status": 1    	}	]}</td>
  </tr>
</table>


GET: (single)

/url/user/1

Response: 

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_user": 1,        	"username": "sample@mail.com",        	"password": "passphrase",        	"fb_userid": "",        	"tw_userid": "",        	"enroll_date": "2018-02-22T06:00:00.000Z",        	"user_status": 1    	}	]}</td>
  </tr>
</table>


### Booking		

<table>
  <tr>
    <td>Path:</td>
    <td>/booking</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available bookings) , RequestParam “/:id” (Retrieves Single booking)  RequestParam “/user/:id” (Retrieves all bookings per user id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new booking)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update booking), RequestParam: “id” (Id for the booking to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the booking to delete)</td>
  </tr>
</table>


POST:

/url/booking

RequestBody:

<table>
  <tr>
    <td>{    "fk_user":"1",    "fk_studio_plan":"1",    "booking_date":"2018-03-01",    "booking_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET (All):

/url/booking

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_booking": 1,        	"fk_user": 1,        	"fk_studio_plan": 1,        	"booking_date": "2018-03-01T06:00:00.000Z",        	"booking_status": 1    	}	]}</td>
  </tr>
</table>


GET (Single)

/url/booking/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_booking": 1,        	"fk_user": 1,        	"fk_studio_plan": 1,        	"booking_date": "2018-03-01T06:00:00.000Z",        	"booking_status": 1    	}	]}</td>
  </tr>
</table>


GET (ByUser):

/url/booking/user/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_booking": 1,        	"fk_user": 1,        	"fk_studio_plan": 1,        	"booking_date": "2018-03-01T06:00:00.000Z",        	"booking_status": 1    	}	]}</td>
  </tr>
</table>


### PaymentMethod		

<table>
  <tr>
    <td>Path:</td>
    <td>/paymentmethod</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available payment method) , RequestParam “/:id” (Retrieves Single payment method)  RequestParam “/user/:id” (Retrieves all payments methods per user id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new payment method)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update payment method), RequestParam: “id” (Id for the payment method to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the payment method to delete)</td>
  </tr>
</table>


POST:

/url/paymentmethod

RequestBody:

<table>
  <tr>
    <td>{    "fk_user":"1",    "cardholder":"Sample User",    "card_type":"VISA",    "card_number":"4588",    "email":"sample@mail.com",    "exp_month":"08",    "exp_year":"22",    "status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET(ByUser):

/url/paymentmethod/user/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_payment_method": 1,        	"fk_user": 1,        	"cardholder": "Sample User",        	"card_type": "VISA",        	"card_number": "4588",        	"email": "sample@mail.com",        	"exp_month": "08",        	"exp_year": "22",        	"status": 1    	}	]}</td>
  </tr>
</table>


### Order		

<table>
  <tr>
    <td>Path:</td>
    <td>/order</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available orders) , RequestParam “/:id” (Retrieves Single order)  RequestParam “/bookig/:id” (Retrieves order per booking id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new order)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update order), RequestParam: “id” (Id for the order to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the booking to delete)</td>
  </tr>
</table>


GET:(All)

/get/order

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_order": 1,        	"fk_booking": 1,        	"order_date": "2018-03-01T06:00:00.000Z",        	"ref_number": "12345",        	"amount": 800,        	"status": 1    	}	]}</td>
  </tr>
</table>


GET:(Single)

/get/order/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_order": 1,        	"fk_booking": 1,        	"order_date": "2018-03-01T06:00:00.000Z",        	"ref_number": "12345",        	"amount": 800,        	"status": 1    	}	]}</td>
  </tr>
</table>


GET:(ByBooking)

/get/order/booking/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_order": 1,        	"fk_booking": 1,        	"order_date": "2018-03-01T06:00:00.000Z",        	"ref_number": "12345",        	"amount": 800,        	"status": 1    	}	]}</td>
  </tr>
</table>


### Studio

<table>
  <tr>
    <td>Path:</td>
    <td>/studio</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available studios) , RequestParam “:id” (Retrieves Single studio)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new studio)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update studio), RequestParam: “id” (Id for the studio to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the studio to delete)</td>
  </tr>
</table>


GET: (All)

/url/studio

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    {   	 "fk_gallery":"1",   	 "fk_studio_speciality":"1",   	 "studio_location_latlng":"lat,lang",   	 "studio_name":"Upscale Recording Studio",   	 "studio_description":"Upscale Studios a recording facility located in downtown Chicago. We focus recording, mixing, and mastering all types of urban music including specializing in R&B, rap, hip hop and latin styles"   	 "studio_location_description":"",   	 "studio_phone_number":"+6200141246",   	 "studio_producer_first_name":"",   	 "studio_producer_last_name":"",   	 "studio_equipment":"",   	 "cre_date":"",   	 "up_date":""    }    ]}</td>
  </tr>
</table>


GET: (Single)

/url/studio/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    {   	 "fk_gallery":"1",   	 "fk_studio_speciality":"1",   	 "studio_location_latlng":"lat,lang",   	 "studio_name":"Upscale Recording Studio",   	 "studio_description":"Upscale Studios a recording facility located in downtown Chicago. We focus recording, mixing, and mastering all types of urban music including specializing in R&B, rap, hip hop and latin styles"   	 "studio_location_description":"",   	 "studio_phone_number":"+6200141246",   	 "studio_producer_first_name":"",   	 "studio_producer_last_name":"",   	 "studio_equipment":"",   	 "cre_date":"",   	 "up_date":""    }    ]}</td>
  </tr>
</table>


### StudioSpeciality

<table>
  <tr>
    <td>Path:</td>
    <td>/studiospeciality</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available studio specialities) , RequestParam “:id” (Retrieves Single studio speciality), </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new studio speciality)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update studio speciality), RequestParam: “id” (Id for the studio speciality to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the studio speciality to delete)</td>
  </tr>
</table>


GET: (All)

/url/studiospeciality

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_speciality": 1,        	"category_name": "Mastering Studio"    	},    	{        	"pk_speciality": 2,        	"category_name": "Tracking Studio"    	},    	{        	"pk_speciality": 3,        	"category_name": "Mixing Studio"    	},    	{        	"pk_speciality": 4,        	"category_name": "Recording Studio"    	}	]}</td>
  </tr>
</table>


GET:(Single)

/url/studiospeciality/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_speciality": 2,        	"category_name": "Tracking Studio"    	}	]}</td>
  </tr>
</table>


### StudioPlan

<table>
  <tr>
    <td>Path:</td>
    <td>/studioplan</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available studio plan) , RequestParam “:id” (Retrieves Single studio plan), RequestParam “/studio/:id” (Retrieves studio plan per studio id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new studio plan)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update studio plan), RequestParam: “id” (Id for the studio plan to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the studio plan to delete)</td>
  </tr>
</table>


GET: (All)

/url/studioplan

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_studio_plan": 1,        	"fk_studio": 1,        	"plan_name": "Full Day",        	"plan_description": "10 hours sessions",        	"plan_price": "800.00",        	"plan_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/studioplan/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_studio_plan": 1,        	"fk_studio": 1,        	"plan_name": "Full Day",        	"plan_description": "10 hours sessions",        	"plan_price": "800.00",        	"plan_status": 1    	}	]}</td>
  </tr>
</table>


GET: (ByStudio)

/url/studioplan/studio/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_studio_plan": 1,        	"fk_studio": 1,        	"plan_name": "Full Day",        	"plan_description": "10 hours sessions",        	"plan_price": "800.00",        	"plan_status": 1    	}	]}</td>
  </tr>
</table>


### StudioSchedule

<table>
  <tr>
    <td>Path:</td>
    <td>/studioschedule</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available studio schedule) , RequestParam “:id” (Retrieves Single studio schedule),RequestParam “/studio/:id” (Retrieves studio schedule per studio id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new studio schedule)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update studio schedule), RequestParam: “id” (Id for the studio schedule to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the studio schedule to delete)</td>
  </tr>
</table>


GET:(All)

/url/studioschedule

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_studio_schedule":"1",   		 "fk_studio":"1",   		 "fk_schedule":"1",   		 "status":"1"   	 }    ]   		 }</td>
  </tr>
</table>


GET:(Single)

/url/studioschedule/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_studio_schedule":"1",   		 "fk_studio":"1",   		 "fk_schedule":"1",   		 "status":"1"   	 }    ]   		 }</td>
  </tr>
</table>


GET:(ByStudio)

/url/get/studioschedule/studio/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_studio_schedule":"1",   		 "fk_studio":"1",   		 "fk_schedule":"1",   		 "status":"1"   	 }    ]   		 }</td>
  </tr>
</table>


### Gallery

<table>
  <tr>
    <td>Path:</td>
    <td>/galery</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available galleries) , RequestParam “:id” (Retrieves Single gallery)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new gallery)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update gallery), RequestParam: “id” (Id for the gallery to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the gallery to delete)</td>
  </tr>
</table>


GET: (All)

/url/gallery

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_gallery":1,   		 "gallery_description":"Upscale Studio"   	 }    ]   		 }</td>
  </tr>
</table>


GET: (Single)

/url/gallery/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_gallery":1,   		 "gallery_description":"Upscale Studio"   	 }    ]   		 }</td>
  </tr>
</table>


### GalleryImage

<table>
  <tr>
    <td>Path:</td>
    <td>/galleryimage</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available gallery images) , RequestParam “:id” (Retrieves Single gallery images),RequestParam “/gallery/:id” (Retrieves gallery image per gallery  id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new gallery image)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update gallery image), RequestParam: “id” (Id for the gallery image to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the gallery image to delete)</td>
  </tr>
</table>


GET: (All)

/url/galleryimage

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_image":1,   		 "fk_gallery":1,   		 "image_title":"Lobby",   		 "image_uri":"/path/to/image"   	 }    ]   		 }</td>
  </tr>
</table>


GET:(Single)

/url/galleryimage/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_image":1,   		 "fk_gallery":1,   		 "image_title":"Lobby",   		 "image_uri":"/path/to/image"   	 }    ]   		 }</td>
  </tr>
</table>


GET:(ByGallery)

/url/galleryimage/gallery/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {       		 "pk_image":1,   		 "fk_gallery":1,   		 "image_title":"Lobby",   		 "image_uri":"/path/to/image"   	 }    ]   		 }</td>
  </tr>
</table>


 

### Section

<table>
  <tr>
    <td>Path:</td>
    <td>/section</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available sections) , RequestParam “:id” (Retrieves Single section)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new section)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update section), RequestParam: “id” (Id for the section to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the section to delete)</td>
  </tr>
</table>


GET: (All)

/url/section

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_section": 1,        	"section_name": "Featured Songs",        	"content_id": "1"    	},    	{        	"pk_section": 2,        	"section_name": "Studios",        	"content_id": "1"    	}	]}</td>
  </tr>
</table>


GET:(Single)

/url/section/1

Reponse:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_section": 1,        	"section_name": "Featured Songs",        	"content_id": "1"    	}	]}</td>
  </tr>
</table>


### Schedule

<table>
  <tr>
    <td>Path:</td>
    <td>/schedule</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available schedules) , RequestParam “:id” (Retrieves Single schedule)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new schedule)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update schedule), RequestParam: “id” (Id for the schedule to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the schedule to delete)</td>
  </tr>
</table>


GET: (All)

/url/schedule

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_schedule": 1,        	"initial_day": "Monday",        	"end_day": "Friday",        	"initial_hour": "08:00 a.m.",        	"end_hour": "10:00 p.m.",        	"schedule_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/schedule/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_schedule": 1,        	"initial_day": "Monday",        	"end_day": "Friday",        	"initial_hour": "08:00 a.m.",        	"end_hour": "10:00 p.m.",        	"schedule_status": 1    	}	]}</td>
  </tr>
</table>


### ArtistRate		

<table>
  <tr>
    <td>Path:</td>
    <td>/artistrate</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available artist rates) , RequestParam “/:id” (Retrieves Single artist rate)  RequestParam “/artist/:id” (Retrieves all artist rates per artist  id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new artist rate)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update artist rate), RequestParam: “id” (Id for the artist rate to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the artist rate to delete)</td>
  </tr>
</table>


POST:

/url/artistrate

RequestBody:

<table>
  <tr>
    <td>{    "fk_artist":"1",    "fk_user":"1",    "rate_comment":"You are a great artist, i love your music" ,    "rate_value":"5.0",    "rate_date":"2018-02-22",    "rate_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


### AlbumRate		

<table>
  <tr>
    <td>Path:</td>
    <td>/albumrate</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available album rates) , RequestParam “/:id” (Retrieves Single album rate)  RequestParam “/album/:id” (Retrieves all album rates per album  id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new album rate)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update album rate), RequestParam: “id” (Id for the album rate to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the album rate to delete)</td>
  </tr>
</table>


POST:

/url/albumrate

RequestBody:

<table>
  <tr>
    <td>{    "fk_album":"1",    "fk_user":"1",    "rate_comment":"Great album, great music!" ,    "rate_value":"5.0",    "rate_date":"2018-02-22",    "rate_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET: (All)

/url/albumrate

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_album_rate": 1,        	"fk_album": 1,        	"fk_user": 1,        	"rate_comment": "Great album, great music!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


GET:(Single)

/url/albumrate/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_album_rate": 1,        	"fk_album": 1,        	"fk_user": 1,        	"rate_comment": "Great album, great music!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


GET: (ByAlbum)

/url/albumrate/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_album_rate": 1,        	"fk_album": 1,        	"fk_user": 1,        	"rate_comment": "Great album, great music!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


### SongRate		

<table>
  <tr>
    <td>Path:</td>
    <td>/songrate</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available song rates) , RequestParam “/:id” (Retrieves Single song rate)  RequestParam “/song/:id” (Retrieves all song rates per song id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new song rate)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update song rate), RequestParam: “id” (Id for the song rate to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the song rate to delete)</td>
  </tr>
</table>


POST:

/url/songrate/

RequestBody:

<table>
  <tr>
    <td>{    "fk_song":"1",    "fk_user":"1",    "rate_comment":"This song is awesome!" ,    "rate_value":"5.0",    "rate_date":"2018-02-22",    "rate_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET: (All)

/url/songrate

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_song_rate": 1,        	"fk_song": 1,        	"fk_user": 1,        	"rate_comment": "This song is awesome!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/songrate/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_song_rate": 1,        	"fk_song": 1,        	"fk_user": 1,        	"rate_comment": "This song is awesome!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


GET: (BySong)

/url/songrate/song/1

Response: 

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_song_rate": 1,        	"fk_song": 1,        	"fk_user": 1,        	"rate_comment": "This song is awesome!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


### VideoRate		

<table>
  <tr>
    <td>Path:</td>
    <td>/videorate</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available video rates) , RequestParam “/:id” (Retrieves Single video rate)  RequestParam “/video/:id” (Retrieves all video rates per video id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new video rate)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update video rate), RequestParam: “id” (Id for the video rate to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the video rate to delete)</td>
  </tr>
</table>


POST:

/url/videorate

RequestBody:

<table>
  <tr>
    <td>{    "fk_video":"1",    "fk_user":"1",    "rate_comment":"I love all your videos!" ,    "rate_value":"5.0",    "rate_date":"2018-02-22",    "rate_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET: (All)

/url/videorate

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_video_rate": 1,        	"fk_video": 1,        	"fk_user": 1,        	"rate_comment": "I love all your videos!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


GET: (Single)

/url/videorate/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_video_rate": 1,        	"fk_video": 1,        	"fk_user": 1,        	"rate_comment": "I love all your videos!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


GET: (ByVideo)

/url/videorate/video/1

Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": [    	{        	"pk_video_rate": 1,        	"fk_video": 1,        	"fk_user": 1,        	"rate_comment": "I love all your videos!",        	"rate_value": 5,        	"rate_date": "2018-02-22T06:00:00.000Z",        	"rate_status": 1    	}	]}</td>
  </tr>
</table>


### StudioRate		

<table>
  <tr>
    <td>Path:</td>
    <td>/studiorate</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>"/" (Retrieves all available studio rates) , RequestParam “/:id” (Retrieves Single studio rate)  RequestParam “/studio/:id” (Retrieves all studio rates per studio  id) </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>RequestBody: (JSON string to create a new studio rate)</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>RequestBody:  (JSON string to update studio rate), RequestParam: “id” (Id for the studio rate to update)</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>RequestParam : “id”  (Id for the studio rate to delete)</td>
  </tr>
</table>


POST:

/url/studiorate

RequestBody:

<table>
  <tr>
    <td>{    "fk_studio":"1",    "fk_user":"1",    "rate_comment":"Great place, it’s just the best!" ,    "rate_value":"5.0",    "rate_date":"2018-02-22",    "rate_status":"1"}</td>
  </tr>
</table>


Response:

<table>
  <tr>
    <td>{	"status": 200,	"response": "Successfully created"}</td>
  </tr>
</table>


GET: (All)

/url/studiorate

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {   		 "pk_studio_rate":1,   		 "fk_studio":1,   		 "fk_user":1,   		 "rate_comment":"This a great place, I love the results I get here"   		 "rate_value": 5   		 "rate_date": "2018-02-22T06:00:00.000Z"   		 "rate_status":1   	 }    ]   		 }</td>
  </tr>
</table>


GET: (Single)

/url/studiorate/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {   		 "pk_studio_rate":1,   		 "fk_studio":1,   		 "fk_user":1,   		 "rate_comment":"This a great place, I love the results I get here"   		 "rate_value": 5   		 "rate_date": "2018-02-22T06:00:00.000Z"   		 "rate_status":1   	 }    ]   		 }</td>
  </tr>
</table>


GET: (ByStudio)

/url/studiorate/studio/1

Response:

<table>
  <tr>
    <td>{    "status": 200,    "response": [   	 {   		 "pk_studio_rate":1,   		 "fk_studio":1,   		 "fk_user":1,   		 "rate_comment":"This a great place, I love the results I get here"   		 "rate_value": 5   		 "rate_date": "2018-02-22T06:00:00.000Z"   		 "rate_status":1   	 }    ]   		 }</td>
  </tr>
</table>


