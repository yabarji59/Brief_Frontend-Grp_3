export class UserModel {
  gender: string = '';
  name_title: string = '';
  name_first: string = '';
  name_last: string = '';

  location_street_number: number = 0;
  location_street_name: string = '';
  location_city: string = '';
  location_state: string = '';
  location_country: string = '';
  location_postcode: number = 0;
  location_coordinates: number = 0;
  location_latitude: number = 0;
  location_longitude: number = 0;
  timezone_offset: string = '';
  timezone_description: string = '';

  email: string = '';
  login_uuid: string = '';
  login_username: string = '';
  login_password: string = '';
  login_salt: string = '';
  login_md5: string = '';
  login_sha1: string = '';
  login_sha256: string = '';
  dob_date: string = '';
  dob_age: number = 0;
  registered_date: string = '';
  registered_age: number = 0;
  phone: string = '';
  cell: string = '';
  id_name: string = '';
  id_value: string = '';
  picture_large: string = '';
  picture_medium: string = '';
  picture_thumbnail: string = '';

  nat: string = '';
}
