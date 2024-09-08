const ContactoFooter = () => {
    return (
        <article className="pl-[0rem] md:pl-[.5rem] text-center md:text-start">

            <h4 className="mb-[26px] font-sans font-bold text-center md:text-left">Contacto</h4>
            <ul className="grid gap-[22px] mb-[10px]">
                <div className="font-sans text-center md:text-start">
                    <li className="mb-[6px] text-[12px] text-stratos-info">
                        <a href="" className="text-stratos-accent font-bold"> info@rextie.com </a>
                    </li>
                    <li className="mb-[6px] text-[12px] text-stratos-info">T. 01 700 3301</li>
                    <li className="mb-[6px] text-[12px] text-stratos-info">C. 963 896 793</li>
                </div>
                <div className="font-sans text-center md:text-start">
                    <li className="mb-[6px] text-[12px] text-stratos-info">Lunes a Viernes:</li>
                    <li className="mb-[6px] text-[12px] text-stratos-info">8:00 am. - 8:00 pm.</li>
                </div>
                <div className="font-sans text-center md:text-start">
                    <li className="mb-[6px] text-[12px] text-stratos-info">Sábados:</li>
                    <li className="mb-[6px] text-[12px] text-stratos-info">9:00 am. - 3:00 pm.</li>
                </div>
                <div className="font-sans text-center md:text-start">
                    <li className="mb-[6px] text-[12px] text-stratos-info">Av. José Gálvez</li>
                    <li className="mb-[6px] text-[12px] text-stratos-info">Barrenechea 566, Of. 101,</li>
                    <li className="mb-[6px] text-[12px] text-stratos-info">Urb. Corpac, San Isidro, Lima.</li>
                </div>
            </ul>

            <div className="block md:hidden w-[90%] h-[1px] my-[22px] bg-[#d0d6e3] mx-auto"></div>
            <a _ngcontent-inq-c61="" target="_blank" rel="noopener noreferrer" href="/libro-de-reclamaciones/"
                className="flex justify-center md:justify-start">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAA2CAMAAAClfmgZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAADqUExURUdwTHB+nHB+m3CAn3CAl3B9mnB/nHB+mnB/m3B+mXBwn3B+m3B8m3B8l3B4l3B9mXB9nXB9m3B+m3B+mXB8nHB6mnB/mnB9m3B+m3B+m3CAmnB6lXB/m3B+nHB+mnB+mnB8mnB9nHB8mXOEnHB9mnB9nHF+nHB+nHB/nHB8m3F+mnCAlXB9m3B+m////9vf5u3v88nP2qWuwMnO2re+zaWuwe3v8vb3+dLX4HmGoZOetIKOqKauwOTn7IKOp8DG1JSetIuWrp2musDG0662x6+2xpymuoGOqLe/zYuWrYqWrsnP2eTn7bi+zfM0xl8AAAAtdFJOUwDf7xAgYJ/fv4AQz0BAIHCPv3+gUDCvcICgMDCPkLCQkJ9QH6+vX8+voG8wj06jgs8AAAR8SURBVGje7ZqJdto4FIavhW3ZkrGBQliSNEmbtLPJBkLBbGHLMu207/86cyXMYsrUzAxJ8Az3cJC4EubD/LL/qwMAACtQsY+gLxg854KKD0TsJ+AFQze4J9tfhEghPfLzDwAuSSk96BqDC5FWerBt+Jhe+owGIr30QI/0R/oj/X+C/q7R7vi+3w5mj3fr+afmLGxjBMHkgOnv/VWEvSjZ/b29yjZ2o2f4YD+6XbJnoG/5nX5f9CfT0VDy3yl2/DU6wWgw7vfHw0R6S1ko+GiBbf3g4y3zWejrSxHdIvRUfK77fvDQjZJBIj21VVMuvzB9t9fr/bGiR34Eb3X8zmCVClBPvd5dMr1RRPpsLncKUPOyZhFKOdOIpmDalfTuKvXv6etK1/X17yPlU19nDb6b8xf0SGcTYlrCAwNbpyjyJ5QrsasuMaFE8jbl+6JHoeAFJ0bWrcfhkV7O8XejFzrAOQFDthTPtU7UGD2TXVOJRyfO3ug/retexa0fiDh9QzR3pZe6z4r3BkFKISnfvJVXG/ErPt+YILhlWcI+VHquZMIMDS2teCeTl7DsmkCqDoZ+WPTXBgZTyinoWXoNkh4sLaufiZL6YtopOxM4rmVBL8Bh0avEe3XufxIir8/pM1UhSHl+o5JpXAcyJfLsoOjjd9Q1XWT0zKr7XeoQ6V/Q5xzpj/T/X/rgWejZbhdG9tr0FqX8yt38tDfWTptM5PKV6Wnetqn1z+jhvPja9OhzDMGAeabtKjMvTbykZwXTqHng2i76+8jby5wrnZFhylLAQysRFQKe481neKbcsGfxWmA7/Wwv9DkBLuU21VwoSDNvSXqXaibVNHSdHFuaP0Hr76LPtwi+PU9M+Zoa0v3jMANKcMYVANfOT0gJLO5RJ4n+1q83m4+9py30T837VqueTK9ZXFTgSpobbmewC3pF0l9pGenQkN5BgaO3r2pwoaFnqIp5CWA4kn5RCFB003Y0cmIB/Q0ykEw/j07Q+rJG370POss9hSTdV0VZYqJ5J2/R3i90bymBSPqFvrR5dVsUcBEtC2osCwE5A6deEDwO/mIO1QqJ9JMgbITBcF7/fYroe6FE7wwbjUYYfk5WjoXG/oYr814SzoL+5lqqOU6vFrOBjNr8ckmNyP0v6T0ij1OT04idRL+IySBU/Ejfk7Vs8G21C5VIr2PBZKCK9YILnJ/qZwoTM2j34/SO8FiWCqiJwmmW21I580LAWdDjCGNeKZN3Gb/clV7uKAzqix2oYLw+kLxqbeJChaB5r4HOhdAcdZIr6PB/jtPPc5goUlUKIP2iEIjo1Qgx4BwPoyfQd780Z41hW+35ha3HWyX2r7PWMje773V3vddG5j2jb9r62A1qYfHX3X9mS5EQf/M2+rq/ER1/S3QO1Of4fjscDaaTfr8/Hj+MhhHucPQQ5QatUCUPkH4wmnY3dtdw7QaDzeR0NDju3x/pj/RH+r9NT9NL73L0n6mlNy7RZKeV3uWyHEgpvcvVdm45jf/sYgUaVbj6OU/dv+poRVrQPwGkQgbTbSYyQwAAAABJRU5ErkJggg=="
                    alt="" />
            </a>
            <div className="block md:hidden w-[90%] h-[1px] my-[22px] bg-[#d0d6e3] mx-auto"></div>

        </article>
    );
}

export default ContactoFooter;
