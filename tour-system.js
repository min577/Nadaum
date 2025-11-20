// Tour System for Nadaum Onboarding
// This file should be included in feed.html, persona_lab.html, mypage.html, and routine.html

class TourSystem {
    constructor() {
        this.currentStep = 0;
        this.globalStep = 0;
        this.userLevel = 'beginner';
        this.selectedCategories = [];
        
        // Define all tour steps in order
        this.allTourSteps = [
            // Feed page - Step 1
            {
                page: 'feed',
                element: '.header',
                title: '피드에서 루틴 발견하기 📱',
                text: '다른 사람들이 공유한 루틴을 둘러보고 쉽게 저장할 수 있어요. 마음에 드는 루틴을 발견해보세요!',
                position: 'bottom',
                demo: (element) => {
                    setTimeout(() => {
                        const firstPost = document.querySelector('.post-card:first-child');
                        if (firstPost) {
                            firstPost.style.transform = 'scale(1.02)';
                            firstPost.style.transition = 'transform 0.3s';
                            setTimeout(() => {
                                firstPost.style.transform = 'scale(1)';
                            }, 1000);
                        }
                    }, 500);
                }
            },
            // Feed page - Step 2
            {
                page: 'feed',
                element: '.post-card:first-child .routine-save-btn',
                title: '루틴 저장하기 📖',
                text: '마음에 드는 루틴을 발견했나요? 이 버튼을 누르면 내 루틴 관리에 바로 추가할 수 있어요!',
                position: 'top',
                demo: (element) => {
                    element.style.animation = 'pulse 1.5s infinite';
                    const style = document.createElement('style');
                    style.id = 'tour-pulse-style';
                    style.textContent = `
                        @keyframes pulse {
                            0%, 100% { transform: scale(1); }
                            50% { transform: scale(1.05); }
                        }
                    `;
                    document.head.appendChild(style);
                }
            },
            // Persona Lab - Step 3
            {
                page: 'persona_lab',
                element: '.header',
                title: '페르소나 실험실 🧪',
                text: '새로운 나를 실험해볼 수 있는 공간이에요. 다양한 루틴 패키지를 통해 변화를 경험할 수 있습니다.',
                position: 'bottom',
                demo: (element) => {
                    setTimeout(() => {
                        const firstExperiment = document.querySelector('.experiment-card');
                        if (firstExperiment) {
                            firstExperiment.style.transform = 'scale(1.02)';
                            firstExperiment.style.transition = 'transform 0.3s';
                            setTimeout(() => {
                                firstExperiment.style.transform = 'scale(1)';
                            }, 1000);
                        }
                    }, 500);
                }
            },
            // Persona Lab - Step 4
            {
                page: 'persona_lab',
                element: '.experiment-card:first-child',
                title: '실험 패키지 선택하기 🎯',
                text: '각 실험은 특정 목표를 위한 루틴 묶음이에요. 기간과 난이도를 확인하고 도전해보세요!',
                position: 'bottom',
                demo: (element) => {
                    element.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.3)';
                    element.style.transition = 'box-shadow 0.3s';
                }
            },
            // My Page - Step 5
            {
                page: 'mypage',
                element: '.avatar-dashboard',
                title: '나의 성장 확인하기 🌱',
                text: '아바타를 통해 나의 성과를 시각화해서 볼 수 있어요. 루틴을 달성할 때마다 아바타가 레벨업합니다!',
                position: 'bottom',
                demo: (element) => {
                    const avatar = element.querySelector('.avatar-main');
                    if (avatar) {
                        avatar.style.transform = 'scale(1.1) rotate(5deg)';
                        avatar.style.transition = 'transform 0.5s';
                        setTimeout(() => {
                            avatar.style.transform = 'scale(1) rotate(0deg)';
                        }, 1000);
                    }
                }
            },
            // My Page - Step 6
            {
                page: 'mypage',
                element: '.category-stats',
                title: '카테고리별 활동 현황 📊',
                text: '각 카테고리별로 얼마나 활동했는지 한눈에 볼 수 있어요. 활발히 활동한 카테고리는 아이콘이 밝게 표시됩니다.',
                position: 'bottom',
                demo: (element) => {
                    const activeStats = element.querySelectorAll('.stat-item.active');
                    activeStats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.transform = 'scale(1.15)';
                            stat.style.transition = 'transform 0.3s';
                            setTimeout(() => {
                                stat.style.transform = 'scale(1)';
                            }, 500);
                        }, index * 200);
                    });
                }
            },
            // Routine Management - Step 7
            {
                page: 'routine',
                element: '.header',
                title: '루틴 관리 탭 📅',
                text: '루틴 관리 탭에서 나의 모든 루틴을 관리할 수 있어요. 오늘 해야 할 일과 달성 기록을 확인해보세요!',
                position: 'bottom',
                demo: (element) => {
                    setTimeout(() => {
                        const streakSection = document.querySelector('.streak-section');
                        if (streakSection) {
                            streakSection.style.transform = 'scale(1.02)';
                            streakSection.style.transition = 'transform 0.3s';
                            setTimeout(() => {
                                streakSection.style.transform = 'scale(1)';
                            }, 1000);
                        }
                    }, 500);
                }
            },
            // Routine Management - Step 8
            {
                page: 'routine',
                element: '.streak-section',
                title: '연속 달성 기록 🔥',
                text: '연속으로 루틴을 달성한 날을 확인할 수 있어요. 연속 기록을 계속 이어가보세요!',
                position: 'bottom',
                demo: (element) => {
                    const streakCount = element.querySelector('.streak-count');
                    if (streakCount) {
                        streakCount.style.transform = 'scale(1.2)';
                        streakCount.style.transition = 'transform 0.3s';
                        setTimeout(() => {
                            streakCount.style.transform = 'scale(1)';
                        }, 800);
                    }
                }
            },
            // Routine Management - Step 9
            {
                page: 'routine',
                element: '.calendar-section',
                title: '루틴 캘린더 📅',
                text: '캘린더에서 매일의 루틴 달성 현황을 색상으로 확인할 수 있어요. 초록색이 진할수록 많은 루틴을 완료한 날입니다.',
                position: 'bottom',
                demo: (element) => {
                    const completedDays = element.querySelectorAll('.day-cell.completed, .day-cell.high-complete');
                    completedDays.forEach((day, index) => {
                        if (index < 5) {
                            setTimeout(() => {
                                day.style.transform = 'scale(1.2)';
                                day.style.transition = 'transform 0.3s';
                                setTimeout(() => {
                                    day.style.transform = 'scale(1)';
                                }, 400);
                            }, index * 150);
                        }
                    });
                }
            },
            // Routine Management - Step 10
            {
                page: 'routine',
                element: '.today-section',
                title: '오늘의 루틴 관리 ✅',
                text: '오늘 해야 할 루틴 목록이에요. 완료하면 체크해보세요. 체크하면 캘린더에도 반영됩니다!',
                position: 'top',
                isLastBeforeRecommendation: true,
                demo: (element) => {
                    const firstCheckCircle = element.querySelector('.check-circle:not(.checked)');
                    if (firstCheckCircle) {
                        firstCheckCircle.style.border = '3px solid #667eea';
                        firstCheckCircle.style.transition = 'all 0.3s';
                    }
                }
            }
        ];
        
        // 루틴 등록 가이드 투어 (별도)
        this.routineRegistrationSteps = [
            {
                element: '#newRoutineForm .category-select',
                title: '1. 분야 선택하기 📋',
                text: '먼저 루틴의 카테고리를 선택해주세요. 운동, 영양섭취, 바디케어, 회복/컨디셔닝, 습관 개선 중에서 고를 수 있어요.',
                position: 'bottom'
            },
            {
                element: '#newRoutineForm .day-select',
                title: '2. 요일 선택하기 📅',
                text: '이 루틴을 실천할 요일을 선택해주세요. 여러 요일을 선택할 수 있어요.',
                position: 'bottom'
            },
            {
                element: '#newRoutineForm .form-input[type="text"]',
                title: '3. 일일 목표 입력하기 ✏️',
                text: '구체적인 루틴 목표를 입력해주세요. 예: "아침 러닝 30분", "물 2L 마시기"',
                position: 'bottom'
            },
            {
                element: '#newRoutineForm .time-input-group',
                title: '4. 실천 시간 설정 (선택) ⏰',
                text: '루틴을 실천할 시간을 설정할 수 있어요. 시간이 정해지지 않았다면 비워두셔도 됩니다.',
                position: 'top'
            },
            {
                element: '#newRoutineForm .form-submit-btn',
                title: '5. 등록 완료하기 ✅',
                text: '모든 정보를 입력했다면 이 버튼을 눌러 루틴을 등록해주세요!',
                position: 'top'
            }
        ];
        
        this.currentRoutineStep = 0;
        
        this.init();
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.get('tour') === 'true') {
            this.userLevel = urlParams.get('level') || 'beginner';
            this.selectedCategories = urlParams.get('categories')?.split(',').filter(c => c) || [];
            this.globalStep = parseInt(urlParams.get('step') || '0');
            
            const currentPage = this.getCurrentPage();
            
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.startTour(currentPage);
                });
            } else {
                setTimeout(() => {
                    this.startTour(currentPage);
                }, 300);
            }
        }
        
        // 루틴 등록 가이드 초기화 (온보딩에서 직접 등록으로 온 경우)
        if (urlParams.get('openModal') === 'true' && urlParams.get('startGuide') === 'true') {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    this.waitForModalAndStartGuide();
                });
            } else {
                this.waitForModalAndStartGuide();
            }
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('feed.html')) return 'feed';
        if (path.includes('persona_lab.html')) return 'persona_lab';
        if (path.includes('mypage.html')) return 'mypage';
        if (path.includes('routine.html')) return 'routine';
        return 'feed';
    }

    startTour(page) {
        this.currentPage = page;
        
        const step = this.allTourSteps[this.globalStep];
        
        if (!step) {
            this.completeTour();
            return;
        }
        
        if (step.page !== page) {
            this.navigateToPage(step.page);
            return;
        }
        
        this.showTourStep(step);
    }

    showTourStep(step) {
        const element = document.querySelector(step.element);
        
        if (!element) {
            console.error('Tour element not found:', step.element);
            this.globalStep++;
            this.startTour(this.currentPage);
            return;
        }

        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({
            top: Math.max(0, middle),
            behavior: 'smooth'
        });

        setTimeout(() => {
            this.createOverlay(element);
            this.showTooltip(element, step);
            
            if (step.demo) {
                step.demo(element);
            }
        }, 500);
    }

    createOverlay(element) {
        const existingOverlay = document.getElementById('tour-overlay');
        const existingHighlight = document.getElementById('tour-highlight');
        const existingTooltip = document.getElementById('tour-tooltip');
        if (existingOverlay) existingOverlay.remove();
        if (existingHighlight) existingHighlight.remove();
        if (existingTooltip) existingTooltip.remove();

        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        const elementTop = rect.top + scrollTop;
        const elementLeft = rect.left + scrollLeft;

        const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );

        const overlay = document.createElement('div');
        overlay.id = 'tour-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${docHeight}px;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 9998;
            pointer-events: none;
        `;
        document.body.appendChild(overlay);

        const highlight = document.createElement('div');
        highlight.id = 'tour-highlight';
        highlight.style.cssText = `
            position: absolute;
            top: ${elementTop - 8}px;
            left: ${elementLeft - 8}px;
            width: ${rect.width + 16}px;
            height: ${rect.height + 16}px;
            border-radius: 12px;
            box-shadow: 0 0 0 4px #667eea, 0 0 0 9999px rgba(0, 0, 0, 0.6);
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(highlight);

        element.style.position = 'relative';
        element.style.zIndex = '10000';
        element.style.pointerEvents = 'auto';
    }

    showTooltip(element, step) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const tooltip = document.createElement('div');
        tooltip.id = 'tour-tooltip';
        
        const stepNumber = this.globalStep + 1;
        const totalSteps = this.allTourSteps.length;
        
        tooltip.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="font-size: 18px; font-weight: 700; color: #333;">
                    ${step.title}
                </div>
                <div style="font-size: 12px; color: #999; font-weight: 600;">
                    ${stepNumber}/${totalSteps}
                </div>
            </div>
            <div style="font-size: 15px; line-height: 1.6; color: #666; margin-bottom: 20px;">
                ${step.text}
            </div>
            <div style="display: flex; gap: 8px;">
                <button id="tour-skip-btn" style="
                    flex: 1;
                    padding: 12px;
                    border-radius: 8px;
                    border: none;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    background-color: #f5f5f5;
                    color: #666;
                ">건너뛰기</button>
                <button id="tour-next-btn" style="
                    flex: 2;
                    padding: 12px;
                    border-radius: 8px;
                    border: none;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                ">다음</button>
            </div>
        `;

        tooltip.style.cssText = `
            position: absolute;
            background-color: white;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            max-width: 340px;
            z-index: 10001;
            pointer-events: auto;
        `;

        document.body.appendChild(tooltip);

        const tooltipRect = tooltip.getBoundingClientRect();
        const tooltipHeight = tooltipRect.height;
        const tooltipWidth = tooltipRect.width;

        const position = step.position || 'bottom';
        const elementTop = rect.top + scrollTop;
        const elementBottom = elementTop + rect.height;
        const elementLeft = rect.left;
        const elementCenter = elementLeft + rect.width / 2;

        const viewportHeight = window.innerHeight;
        const spaceAbove = rect.top;
        const spaceBelow = viewportHeight - rect.bottom;
        const minGap = 24;

        let finalTop;
        let finalLeft;

        if (position === 'bottom') {
            if (spaceBelow >= tooltipHeight + minGap) {
                finalTop = elementBottom + minGap;
            } else if (spaceAbove >= tooltipHeight + minGap) {
                finalTop = elementTop - tooltipHeight - minGap;
            } else {
                finalTop = elementBottom + minGap;
            }
        } else if (position === 'top') {
            if (spaceAbove >= tooltipHeight + minGap) {
                finalTop = elementTop - tooltipHeight - minGap;
            } else if (spaceBelow >= tooltipHeight + minGap) {
                finalTop = elementBottom + minGap;
            } else {
                finalTop = elementTop - tooltipHeight - minGap;
            }
        }

        if (position === 'bottom' || position === 'top') {
            finalLeft = Math.max(20, Math.min(window.innerWidth - tooltipWidth - 20, elementCenter - tooltipWidth / 2));
        }

        tooltip.style.top = `${finalTop}px`;
        tooltip.style.left = `${finalLeft}px`;

        const skipBtn = document.getElementById('tour-skip-btn');
        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                this.skipTour();
            });
        }

        const nextBtn = document.getElementById('tour-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (step.isLastBeforeRecommendation) {
                    this.goToRoutineRecommendation();
                } else {
                    this.nextStep();
                }
            });
        }
    }

    // 루틴 등록 가이드 관련 메서드들
    waitForModalAndStartGuide() {
        const checkModal = setInterval(() => {
            const modal = document.getElementById('routineModal');
            if (modal && modal.classList.contains('active')) {
                clearInterval(checkModal);
                setTimeout(() => {
                    this.startRoutineGuide();
                }, 500);
            }
        }, 100);
        
        setTimeout(() => {
            clearInterval(checkModal);
        }, 10000);
    }

    startRoutineGuide() {
        this.currentRoutineStep = 0;
        this.showRoutineGuideStep();
    }

    showRoutineGuideStep() {
        const step = this.routineRegistrationSteps[this.currentRoutineStep];
        
        if (!step) {
            this.cleanup();
            return;
        }
        
        const element = document.querySelector(step.element);
        
        if (!element) {
            console.error('Guide element not found:', step.element);
            this.currentRoutineStep++;
            this.showRoutineGuideStep();
            return;
        }

        const modalContent = document.querySelector('#routineModal .modal-content');
        if (modalContent) {
            const elementTop = element.offsetTop;
            modalContent.scrollTo({
                top: elementTop - 100,
                behavior: 'smooth'
            });
        }

        setTimeout(() => {
            this.createOverlay(element);
            this.showRoutineGuideTooltip(element, step);
        }, 300);
    }

    showRoutineGuideTooltip(element, step) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const tooltip = document.createElement('div');
        tooltip.id = 'tour-tooltip';
        
        const stepNumber = this.currentRoutineStep + 1;
        const totalSteps = this.routineRegistrationSteps.length;
        
        tooltip.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div style="font-size: 18px; font-weight: 700; color: #333;">
                    ${step.title}
                </div>
                <div style="font-size: 12px; color: #999; font-weight: 600;">
                    ${stepNumber}/${totalSteps}
                </div>
            </div>
            <div style="font-size: 15px; line-height: 1.6; color: #666; margin-bottom: 20px;">
                ${step.text}
            </div>
            <div style="display: flex; gap: 8px;">
                <button id="tour-skip-btn" style="
                    flex: 1;
                    padding: 12px;
                    border-radius: 8px;
                    border: none;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    background-color: #f5f5f5;
                    color: #666;
                ">건너뛰기</button>
                <button id="tour-next-btn" style="
                    flex: 2;
                    padding: 12px;
                    border-radius: 8px;
                    border: none;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                ">${this.currentRoutineStep === totalSteps - 1 ? '완료' : '다음'}</button>
            </div>
        `;

        tooltip.style.cssText = `
            position: absolute;
            background-color: white;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            max-width: 340px;
            z-index: 10001;
            pointer-events: auto;
        `;

        document.body.appendChild(tooltip);

        const tooltipRect = tooltip.getBoundingClientRect();
        const tooltipHeight = tooltipRect.height;
        const tooltipWidth = tooltipRect.width;

        const position = step.position || 'bottom';
        const elementTop = rect.top + scrollTop;
        const elementBottom = elementTop + rect.height;
        const elementLeft = rect.left;
        const elementCenter = elementLeft + rect.width / 2;

        const viewportHeight = window.innerHeight;
        const spaceAbove = rect.top;
        const spaceBelow = viewportHeight - rect.bottom;
        const minGap = 24;

        let finalTop;
        let finalLeft;

        if (position === 'bottom') {
            if (spaceBelow >= tooltipHeight + minGap) {
                finalTop = elementBottom + minGap;
            } else if (spaceAbove >= tooltipHeight + minGap) {
                finalTop = elementTop - tooltipHeight - minGap;
            } else {
                finalTop = elementBottom + minGap;
            }
        } else if (position === 'top') {
            if (spaceAbove >= tooltipHeight + minGap) {
                finalTop = elementTop - tooltipHeight - minGap;
            } else if (spaceBelow >= tooltipHeight + minGap) {
                finalTop = elementBottom + minGap;
            } else {
                finalTop = elementTop - tooltipHeight - minGap;
            }
        }

        if (position === 'bottom' || position === 'top') {
            finalLeft = Math.max(20, Math.min(window.innerWidth - tooltipWidth - 20, elementCenter - tooltipWidth / 2));
        }

        tooltip.style.top = `${finalTop}px`;
        tooltip.style.left = `${finalLeft}px`;

        const skipBtn = document.getElementById('tour-skip-btn');
        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                this.cleanup();
            });
        }

        const nextBtn = document.getElementById('tour-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentRoutineStep === totalSteps - 1) {
                    this.cleanup();
                } else {
                    this.cleanup();
                    this.currentRoutineStep++;
                    setTimeout(() => {
                        this.showRoutineGuideStep();
                    }, 100);
                }
            });
        }
    }

    nextStep() {
        this.globalStep++;
        const nextStep = this.allTourSteps[this.globalStep];
        
        if (!nextStep) {
            this.completeTour();
            return;
        }
        
        if (nextStep.page !== this.currentPage) {
            this.navigateToPage(nextStep.page);
        } else {
            this.cleanup();
            setTimeout(() => {
                this.showTourStep(nextStep);
            }, 100);
        }
    }

    navigateToPage(page) {
        window.location.href = `${page}.html?tour=true&step=${this.globalStep}&level=${this.userLevel}&categories=${this.selectedCategories.join(',')}`;
    }

    skipTour() {
        this.cleanup();
        
        const currentStep = this.allTourSteps[this.globalStep];
        const currentPageName = currentStep.page;
        
        let nextPageStep = null;
        for (let i = this.globalStep + 1; i < this.allTourSteps.length; i++) {
            if (this.allTourSteps[i].page !== currentPageName) {
                nextPageStep = i;
                break;
            }
        }
        
        if (nextPageStep !== null) {
            this.globalStep = nextPageStep;
            const nextStep = this.allTourSteps[this.globalStep];
            
            if (nextStep.page !== this.currentPage) {
                this.navigateToPage(nextStep.page);
            } else {
                setTimeout(() => {
                    this.showTourStep(nextStep);
                }, 100);
            }
        } else {
            this.goToRoutineRecommendation();
        }
    }

    goToRoutineRecommendation() {
        console.log('Going to routine recommendation...');
        this.cleanup();
        
        const url = `onboarding.html?tour=complete&level=${this.userLevel}&categories=${this.selectedCategories.join(',')}`;
        window.location.href = url;
    }

    completeTour() {
        console.log('Completing tour...');
        this.cleanup();
        
        const url = `onboarding.html?tour=complete&level=${this.userLevel}&categories=${this.selectedCategories.join(',')}`;
        window.location.href = url;
    }

    cleanup() {
        const overlay = document.getElementById('tour-overlay');
        const highlight = document.getElementById('tour-highlight');
        const tooltip = document.getElementById('tour-tooltip');
        
        if (overlay) overlay.remove();
        if (highlight) highlight.remove();
        if (tooltip) tooltip.remove();

        document.querySelectorAll('[style*="z-index: 10000"]').forEach(el => {
            el.style.zIndex = '';
            el.style.pointerEvents = '';
            if (el.style.position === 'relative') {
                el.style.position = '';
            }
        });
        
        const pulseStyle = document.getElementById('tour-pulse-style');
        if (pulseStyle) pulseStyle.remove();
        
        document.querySelectorAll('[style*="animation"]').forEach(el => {
            el.style.animation = '';
        });
    }
}

const tourSystem = new TourSystem();