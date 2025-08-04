
function Loading({width,height,position}) {

    return (
        <div class="d-flex justify-content-center align-items-center" style={position && {height:position}}>
            <div class="spinner-border my-color" style={{width: width, height: height}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}
export default Loading