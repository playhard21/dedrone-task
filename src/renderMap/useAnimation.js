import useRenderMap from "./useRenderMap";


function useAnimation(marker, newPosition) {
    const options = {
        duration: 1000,
        easing: function (x, t, b, c, d) {
            // jquery animation: swing (easeOutQuad)
            return -c * (t /= d) * (t - 2) + b;
        }
    };

    window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    window.cancelAnimationFrame =
        window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    // save current position. prefixed to avoid name collisions. separate for lat/lng to avoid calling lat()/lng() in every frame
    marker.AT_startPosition_lat = marker.getPosition().lat();
    marker.AT_startPosition_lng = marker.getPosition().lng();
    let newPosition_lat = newPosition.lat();
    let newPosition_lng = newPosition.lng();

    // crossing the 180° meridian and going the long way around the earth?
    if (Math.abs(newPosition_lng - marker.AT_startPosition_lng) > 180) {
        if (newPosition_lng > marker.AT_startPosition_lng) {
            newPosition_lng -= 360;
        } else {
            newPosition_lng += 360;
        }
    }

    let animateStep = function (marker, startTime) {
        let ellapsedTime = new Date().getTime() - startTime;
        let durationRatio = ellapsedTime / options.duration; // 0 - 1
        let easingDurationRatio = options.easing(
            durationRatio,
            ellapsedTime,
            0,
            1,
            options.duration
        );

        if (durationRatio < 1) {
            marker.setPosition({
                lat:
                    marker.AT_startPosition_lat +
                    (newPosition_lat - marker.AT_startPosition_lat) * easingDurationRatio,
                lng:
                    marker.AT_startPosition_lng +
                    (newPosition_lng - marker.AT_startPosition_lng) * easingDurationRatio
            });

            // use requestAnimationFrame if it exists on this browser. If not, use setTimeout with ~60 fps
            if (window.requestAnimationFrame) {
                marker.AT_animationHandler = window.requestAnimationFrame(function () {
                    animateStep(marker, startTime);
                });
            } else {
                marker.AT_animationHandler = setTimeout(function () {
                    animateStep(marker, startTime);
                }, 17);
            }
        } else {
            marker.setPosition(newPosition);
        }
    };

    // stop possibly running animation
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(marker.AT_animationHandler);
    } else {
        clearTimeout(marker.AT_animationHandler);
    }


    (marker, new Date().getTime());
}

export default useAnimation;