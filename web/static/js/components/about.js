import React from 'react'
import PhotoFrame from './photo_frame'

const About = React.createClass({
  render() {
    return (
      <div>
        <div className="image-block-about" id="about" ref="about">
          <span className="image-text">About Me</span>
        </div>
        <div className="grid">
          <div className="grid__item--sm-span-4">
            <PhotoFrame
              prevElem="about" />
          </div>
          <div className="grid__item--sm-span-8 content-block">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summus dolor plures dies manere non potest? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Totum autem id externum est, et quod externum, id in casu est. Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Ille enim occurrentia nescio quae comminiscebatur; Duo Reges: constructio interrete. Ergo omni animali illud, quod appetiti positum est in eo, quod naturae est accommodatum. Non risu potius quam oratione eiciendum? Primum non saepe, deinde quae est ista relaxatio, cum et praeteriti doloris memoria recens est et futuri atque inpendentis torquet timor? Etsi qui potest intellegi aut cogitari esse aliquod animal, quod se oderit? Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. </p>

            <p>Atque ab isto capite fluere necesse est omnem rationem bonorum et malorum. Atque omnia quidem scire, cuiuscumque modi sint, cupere curiosorum, duci vero maiorum rerum contemplatione ad cupiditatem scientiae summorum virorum est putandum. Negat enim summo bono afferre incrementum diem. Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Ad eos igitur converte te, quaeso. Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus. Estne, quaeso, inquam, sitienti in bibendo voluptas? Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Esto, fecerit, si ita vis, Torquatus propter suas utilitatesmalo enim dicere quam voluptates, in tanto praesertim viro-, num etiam eius collega P. </p>

            <p>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Nec vero intermittunt aut admirationem earum rerum, quae sunt ab antiquis repertae, aut investigationem novarum. Videamus animi partes, quarum est conspectus illustrior; Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem. </p>

            <p>Quo studio cum satiari non possint, omnium ceterarum rerum obliti níhil abiectum, nihil humile cogitant; Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur. An tu me de L. Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi. Suo enim quisque studio maxime ducitur. </p>

            <p>Nam his libris eum malo quam reliquo ornatu villae delectari. Ait enim se, si uratur, Quam hoc suave! dicturum. Qui enim voluptatem ipsam contemnunt, iis licet dicere se acupenserem maenae non anteponere. Nondum autem explanatum satis, erat, quid maxime natura vellet. Modo etiam paulum ad dexteram de via declinavi, ut ad Pericli sepulcrum accederem. </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Summus dolor plures dies manere non potest? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Totum autem id externum est, et quod externum, id in casu est. Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Ille enim occurrentia nescio quae comminiscebatur; Duo Reges: constructio interrete. Ergo omni animali illud, quod appetiti positum est in eo, quod naturae est accommodatum. Non risu potius quam oratione eiciendum? Primum non saepe, deinde quae est ista relaxatio, cum et praeteriti doloris memoria recens est et futuri atque inpendentis torquet timor? Etsi qui potest intellegi aut cogitari esse aliquod animal, quod se oderit? Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. </p>

            <p>Atque ab isto capite fluere necesse est omnem rationem bonorum et malorum. Atque omnia quidem scire, cuiuscumque modi sint, cupere curiosorum, duci vero maiorum rerum contemplatione ad cupiditatem scientiae summorum virorum est putandum. Negat enim summo bono afferre incrementum diem. Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Ad eos igitur converte te, quaeso. Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus. Estne, quaeso, inquam, sitienti in bibendo voluptas? Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Esto, fecerit, si ita vis, Torquatus propter suas utilitatesmalo enim dicere quam voluptates, in tanto praesertim viro-, num etiam eius collega P. </p>

            <p>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi. Quid turpius quam sapientis vitam ex insipientium sermone pendere? Nec vero intermittunt aut admirationem earum rerum, quae sunt ab antiquis repertae, aut investigationem novarum. Videamus animi partes, quarum est conspectus illustrior; Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem. </p>

            <p>Quo studio cum satiari non possint, omnium ceterarum rerum obliti níhil abiectum, nihil humile cogitant; Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? Sic igitur in homine perfectio ista in eo potissimum, quod est optimum, id est in virtute, laudatur. An tu me de L. Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi. Suo enim quisque studio maxime ducitur. </p>

            <p>Nam his libris eum malo quam reliquo ornatu villae delectari. Ait enim se, si uratur, Quam hoc suave! dicturum. Qui enim voluptatem ipsam contemnunt, iis licet dicere se acupenserem maenae non anteponere. Nondum autem explanatum satis, erat, quid maxime natura vellet. Modo etiam paulum ad dexteram de via declinavi, ut ad Pericli sepulcrum accederem. </p>
          </div>
        </div>
      </div>
    )
  }
})

export default About
