import { Injectable, Injector } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RegExp } from '../const/regExp';
import { Format } from '../const/format';
import { Profile, ObjectDetectionImage } from '../const/value';
import * as moment from 'moment';
import { Photo } from 'src/models/Photo';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Injectable()
export class Picture
{
    private readonly android: boolean = this.platform.is( 'android' );
    private readonly options: CameraOptions =
    {
        destinationType: this.camera.DestinationType.FILE_URI
    };

    public constructor( protected injector: Injector, public androidPermissions: AndroidPermissions, private platform: Platform, private camera: Camera, private file: File, private filePath: FilePath) { 
        this.platform.ready().then(() => {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
              result => console.log('Has permission?', result.hasPermission),
              err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
            );
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
          })
    }

    /**
     * Method to get the profile picture from a user
     * @returns 
     */
    public async getProfilePicture(): Promise<string>
    {
        console.log("getProfilePicture")
        this.options.targetWidth = Profile.WIDTH;
        console.log("targetWidth")
        this.options.targetHeight = Profile.HEIGHT;
        console.log("targetHeight")
        this.options.quality = Profile.QUALITY;
        console.log("quality")
        this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        console.log("sourceType")
        this.options.mediaType = this.camera.MediaType.PICTURE;
        console.log("mediaType")
        const response = await this.get();
        console.log("response")
        console.log(response)
        return response.Base64;
    }

    /**
     * Method to take a photo from the camera to detect the object
     * @returns 
     */
    public async getObjectDetectionImage(): Promise<Photo>
    {
        this.options.sourceType = this.camera.PictureSourceType.CAMERA;
        this.options.targetWidth = ObjectDetectionImage.WIDTH;
        this.options.targetHeight = ObjectDetectionImage.HEIGHT;
        this.options.quality = ObjectDetectionImage.QUALITY;
        this.options.destinationType = this.camera.DestinationType.DATA_URL;
        this.options.encodingType = this.camera.EncodingType.JPEG;
        this.options.mediaType = this.camera.MediaType.PICTURE;

        return this.get();
    }

    private async get(): Promise<Photo>
    {
        let result: Photo = new Photo();

        let uri: string;
        let path: string;
        let name: string;

        uri = await this.camera.getPicture( this.options );

        if ( this.android )
        {
            uri = await this.filePath.resolveNativePath( uri );
        }

        path = uri.replace( RegExp.FILE, '$1' );
        name = uri.replace( RegExp.FILE, '$2' );

        result.FileName = this.appendDate( name );
        result.Base64 = await this.file.readAsDataURL( path, name );

        return result;
    }

    private appendDate( name: string ): string
    {
        const dot = name.lastIndexOf( '.' );

        return `${name.substring( 0, dot )}_${moment(new Date()).format( Format.DATEFILE )}${name.substring( dot )}`;
    }
}