import mockAjax from './mockAjax'
export default {
    getactile(){
        return mockAjax.get('/actile')
    }
}
