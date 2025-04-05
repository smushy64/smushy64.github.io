
let status_bar = document.getElementById( "status-bar-time" );

let color_mode         = localStorage.getItem( 'color-mode' );
let current_color_mode = color_mode;

if( color_mode === null ) {
    const system_color_mode = window.matchMedia("(prefers-color-scheme: light)");

    if( system_color_mode.matches ) {
        current_color_mode = "light";
    } else {
        current_color_mode = "dark";
    }
}

const set_color_mode = function ( color_mode_to_set ) {
    localStorage.setItem( "color-mode", color_mode_to_set );
    document.querySelector( "html" ).setAttribute( "data-theme", color_mode_to_set );
    current_color_mode = color_mode_to_set;

    if( color_mode_to_set === "dark" ) {
        document.getElementById( "toggle-mode-icon-dark" ).style.setProperty( "display", "none" );
        document.getElementById( "toggle-mode-icon-light" ).style.setProperty( "display", "" );
    } else {
        document.getElementById( "toggle-mode-icon-light" ).style.setProperty( "display", "none" );
        document.getElementById( "toggle-mode-icon-dark" ).style.setProperty( "display", "" );
    }
}

set_color_mode( current_color_mode );

const color_mode_button = document.getElementById( "toggle-mode" );
color_mode_button.onclick = function () {
    let new_color_mode = "dark";

    if( current_color_mode === "dark" ) {
        new_color_mode = "light";
    } else if( current_color_mode === "light" ) {
        new_color_mode = "dark";
    }

    set_color_mode( new_color_mode );
}

const update_time = function () {
    const date = new Date();

    const month = date.getMonth() + 1;
    const day   = date.getDate();

    let hour = date.getHours();
    const is_pm = hour >= 11;
    hour %= 12;
    if( hour === 0 ) {
        hour = 12;
    }

    const minute = date.getMinutes();

    let am_pm = "AM";
    if( is_pm ) {
        am_pm = "PM";
    }

    status_bar.innerHTML =
        String(month).padStart(2,'0') + "/" +
        String(day).padStart(2, '0') + " " +
        String(hour).padStart(2, '0') + ":" + 
        String(minute).padStart(2, '0') + " " + am_pm;
}

update_time();
const update_time_interval = setInterval( update_time, 1000 );

