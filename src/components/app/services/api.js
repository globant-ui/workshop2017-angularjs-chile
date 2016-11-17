export class ApiService {
    url = 'http://localhost:5000';

    constructor($http){
        this.http = $http;
    }

    getBands(){
        return this.http.get(`${this.url}/bands`)
            .then(response => response.data);
    }

    getBand(bandId){
        return this.http.get(`${this.url}/bands/${bandId}`)
            .then(response => response.data);
    }

    getArtists(bandId) {
        return this.http.get(`${this.url}/bands/${bandId}/artists`)
            .then(response => response.data);
    }

    getAlbums(bandId) {
        return this.http.get(`${this.url}/bands/${bandId}/albums`)
            .then(response => response.data);
    }

    getAlbum(albumId){
        return this.http.get(`${this.url}/albums/${albumId}/tracks`)
            .then(response => response.data);
    }

    getTrack(trackId){
        return this.http.get(`${this.url}/tracks/${trackId}`)
            .then(response => response.data);
    }

    getCommentsForTrack(trackId) {
        return this.http.get(`${this.url}/tracks/${trackId}/comments`)
            .then(response => response.data);
    }

    postCommentForTrack(postData) {
        return this.http.post(`${this.url}/comments`, postData)
            .then(response => response.data);
    }

}
