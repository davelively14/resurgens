import React from 'react'
import PhotoFrameContainer from '../containers/photo_frame_container'

const About = React.createClass({
  render() {
    return (
      <div>
        <div className="image-block-about" id="about" ref="about">
          <span className="image-text">About Me</span>
        </div>
        <div className="grid" id="section-1">
          <div className="grid__item--sm-span-4">
            <PhotoFrameContainer id="1" />
          </div>
          <div className="grid__item--sm-span-8 content-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summus dolor plures dies manere non potest? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Totum autem id externum est, et quod externum, id in casu est. Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Ille enim occurrentia nescio quae comminiscebatur; Duo Reges: constructio interrete. Ergo omni animali illud, quod appetiti positum est in eo, quod naturae est accommodatum. Non risu potius quam oratione eiciendum? Primum non saepe, deinde quae est ista relaxatio, cum et praeteriti doloris memoria recens est et futuri atque inpendentis torquet timor? Etsi qui potest intellegi aut cogitari esse aliquod animal, quod se oderit? Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. </p>
          </div>
        </div>
        <div className="grid" id="section-2">
          Hold here
        </div>
      </div>
    )
  }
})

export default About
